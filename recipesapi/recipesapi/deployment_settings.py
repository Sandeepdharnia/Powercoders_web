import os
from re import DEBUG
import dj_database_url
from django.contrib import staticfiles
from .settings import*
from .settings import BASE_DIR


ALLOWED_HOSTS = [os.environ.get('RENDER_EXTERNAL_HOSTNAME', '')]


CSRF_TRUSTED_ORIGINS = ['https://'+os.environ.get('RENDER_EXTERNAL_HOSTNAME')]

DEBUG = False

SECRET_KEY = os.environ.get['SECRET_KEY']


CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:5500",  # if using simple HTML
    "http://localhost:8000",  # Or wherever your frontend runs locally
    "http://localhost:3001",
    "https://powercoders-web.onrender.com"
]

STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    }, 
    "staticfiles": {
        "BACKEND": 'whitenoise.storage.CompressedStaticFilesStorage',
    },
} 


 

DATABASES = {
        'default': dj_database_url.config(
            default=os.environ['DATABASE_URL'], 
            conn_max_age=600)
    }

    