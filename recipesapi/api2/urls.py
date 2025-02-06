
from django.conf.locale import ro
from django.contrib import admin
from django.db import router
from django.urls import include, path
from rest_framework import routers
from api2.views import LoginViewSet, LogoutViewSet, RecipeViewSet, RegisterViewSet, UserRecipeViewSet

router = routers.DefaultRouter()
router.register(r'recipes', RecipeViewSet, basename='recipe')


urlpatterns = [
    
    path('', include(router.urls)),
    path('register/', RegisterViewSet.as_view(), name='register'),  # User registration endpoint.
    path('login/', LoginViewSet.as_view(), name='login'),  # User login endpoint.
    path('logout/', LogoutViewSet.as_view(), name='logout'),  # User logout endpoint.
    path('my_recipes/', UserRecipeViewSet.as_view(), name='user_recipe'),  # User logout endpoint.
    

]
