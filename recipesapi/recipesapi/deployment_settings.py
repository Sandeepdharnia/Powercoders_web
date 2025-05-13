import os
from re import DEBUG
import dj_database_url
from django.contrib import staticfiles
from .settings import*
from .settings import BASE_DIR


SECRET_KEY = os.environ.get('SECRET_KEY', '840a9e3c35e0a376418ca72d19568342')
ALLOWED_HOSTS = [os.environ.get('RENDER_EXTERNAL_HOSTNAME', ''), 'powercoders-web.onrender.com', '*']

CSRF_TRUSTED_ORIGINS = ['https://' + os.environ.get('RENDER_EXTERNAL_HOSTNAME', '')]

DEBUG = False




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


 

# DATABASES = {
#         'default': dj_database_url.config(
#             default=os.environ['DATABASE_URL'], 
#             conn_max_age=600)
#     }

if 'DATABASE_URL' in os.environ:
    DATABASES = {
        'default': dj_database_url.config(
            default=os.environ.get('DATABASE_URL'),
            conn_max_age=600
        )
    }
else:
    # Fallback for local development
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }    