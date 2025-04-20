import logging
import traceback
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from django.contrib import auth
from django.http import JsonResponse
from django.shortcuts import redirect, render
from rest_framework.authentication import authenticate, get_user_model, TokenAuthentication
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from api2.models import Recipe, CustomUser, ReportRecipe
from api2.serializers import LoginSerializer, RecipeSerializer, RegisterSerializer, ReportRecipeSerializer
     
User = get_user_model()  # ✅ Get the custom user model (Register)

logger = logging.getLogger(__name__)
class ProtectedView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "You are authenticated!"})

# Create your views here.
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated] 
    def perform_create(self, serializer):
        serializer.save(writer=self.request.user)
    

class ReportRecipeViewSet(viewsets.ModelViewSet):
    queryset = ReportRecipe.objects.all()
    serializer_class = ReportRecipeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        recipe_id = self.request.data.get('recipe')

        if ReportRecipe.objects.filter(user = user, recipe_id = recipe_id).exists():
            return Response (
                {"error":"You have already reposted this recipe. "},
                status=status.status.HTTP_400_BAD_REQUEST
            )
        serializer.save(user=user)


# Create a view for user registration

# class RegisterViewSet(CreateAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = RegisterSerializer

#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
        
#         if serializer.is_valid():
#             user = serializer.save()  # ✅ Save the user first
#             token, _ = Token.objects.get_or_create(user=user)  # ✅ Generate token
            
#             return Response(
#                 {
#                     "message": "Registration successful!",
#                     "token": token.key
#                 }, 
#                 status=status.HTTP_201_CREATED
#             )
        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class RegisterViewSet(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response(
                {
                    "message": "Registration successful!",
                    "token": token.key
                },
                status=status.HTTP_201_CREATED
            )
        except ValidationError as e:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error("Registration failed:\n%s", traceback.format_exc())
            return Response(
                {"error": "Internal Server Error", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
# Create a view for user login




# class LoginViewSet(APIView):
#     def post(self, request):
#         # Step 1: Validate input using the LoginSerializer
#         serializer = LoginSerializer(data=request.data)
#         if not serializer.is_valid():
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#         # Step 2: Extract email and password
#         email = serializer.validated_data['email']  # ✅ Use email instead of username
#         password = serializer.validated_data['password']

#         print('Extract', email, password)

#         # Step 3: Authenticate user
#         try:
#             user = User.objects.get(request, email=email, password=password)  # ✅ Look up user by email
#             print('user email address', user)
#             if not user.check_password(password):  # ✅ Check hashed password
#                 return Response({"error": "Invalid credentials."}, status=status.HTTP_400_BAD_REQUEST)
            
#             # Step 4: Generate or retrieve token for the user
#             token, _ = Token.objects.get_or_create(user=user)
#             return Response(
#                 {"token": token.key, "message": "Login successful"},
#                 status=status.HTTP_200_OK,
#             )

#         except User.DoesNotExist:
#             return Response({"error": "Invalid credentials."}, status=status.HTTP_400_BAD_REQUEST)


# <-------Login View ----------------------------------------------------------------------------------------->

class LoginViewSet(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(request, email=email, password=password)
        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "message": "Login successful"}, status=200)
        return Response({"error": "Invalid credentials"}, status=400)



# <-------Logout View ----------------------------------------------------------------------------------------->

class LogoutViewSet(APIView):
    def post(self, request):
        # Ensure the user is authenticated
        print("Received logout request:", request.headers)  # Debugging
        print("Auth:", request.auth)  # Debugging
        if request.auth:
            
            # Delete the token to log the user out
            request.auth.delete()
            return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)
        return Response({"error": "User not logged in"}, status=status.HTTP_400_BAD_REQUEST)


# <-------UserRecipe View ----------------------------------------------------------------------------------------->
class UserRecipeViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        recipes = Recipe.objects.filter(writer=request.user)
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
