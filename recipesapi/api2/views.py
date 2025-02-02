from rest_framework.authtoken.models import Token
from django.contrib import auth
from django.http import JsonResponse
from django.shortcuts import redirect, render
from rest_framework.authentication import authenticate, get_user_model
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from api2.models import Recipe, Register
from api2.serializers import LoginSerializer, RecipeSerializer, RegisterSerializer
     

# Create your views here.
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [AllowAny] 


# Create a view for user registration

class RegisterViewSet(CreateAPIView):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]


# Create a view for user login


User = get_user_model()  # ✅ Get the custom user model (Register)

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


class LoginViewSet(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(request, email=email, password=password)
        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "message": "Login successful"}, status=200)
        return Response({"error": "Invalid credentials"}, status=400)
