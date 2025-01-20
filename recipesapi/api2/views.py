from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from api2.models import Recipe
from api2.serializers import RecipeSerializer

# Create your views here.
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [AllowAny] 