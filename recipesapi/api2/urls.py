
from django.conf.locale import ro
from django.contrib import admin
from django.db import router
from django.urls import include, path
from rest_framework import routers
from api2.views import RecipeViewSet

router = routers.DefaultRouter()
router.register(r'recipes', RecipeViewSet)


urlpatterns = [
    
    path('', include(router.urls)),
]
