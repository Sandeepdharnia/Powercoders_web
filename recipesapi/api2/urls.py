
from django.conf.locale import ro
from django.contrib import admin
from django.db import router
from django.urls import include, path
from rest_framework import routers
from api2.views import LoginViewSet, RecipeViewSet, RegisterViewSet

router = routers.DefaultRouter()
router.register(r'recipes', RecipeViewSet, basename='recipe')
#router.register(r'users', LoginViewSet, basename='user')


urlpatterns = [
    
    path('', include(router.urls)),
    path('register/', RegisterViewSet.as_view(), name='register'),  # User registration endpoint.
    path('login/', LoginViewSet.as_view(), name='login'),  # User login endpoint.
]
