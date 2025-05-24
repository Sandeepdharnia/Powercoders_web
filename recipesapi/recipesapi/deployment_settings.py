import os
from re import DEBUG
import dj_database_url
from django.contrib import staticfiles
from .settings import*
from .settings import BASE_DIR



DEBUG = False
SECRET_KEY = os.environ.get('SECRET_KEY', '840a9e3c35e0a376418ca72d19568342')
ALLOWED_HOSTS = [os.environ.get('RENDER_EXTERNAL_HOSTNAME', ''), 
                 'powercoders-web.onrender.com', '*']

# CSRF_TRUSTED_ORIGINS = ['https://' + os.environ.get('RENDER_EXTERNAL_HOSTNAME', '')]

CSRF_TRUSTED_ORIGINS = [
    f'https://{os.environ.get("RENDER_EXTERNAL_HOSTNAME", "")}',
    'https://powercoders-web.onrender.com'
]




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

# Debug database connection
db_url = os.environ.get('DATABASE_URL')
print(f"Database URL detected: {'Yes' if db_url else 'No'}")

# Fixed database configuration with better error handling
if db_url:
    print(f"Configuring database from DATABASE_URL")
    DATABASES = {
        'default': dj_database_url.config(
            db_url,
            print(db_url)
            # conn_max_age=600,
            # conn_health_checks=True,
            # ssl_require=True
        )
    }
else:
    print("WARNING: No DATABASE_URL found. Falling back to SQLite.")
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

# Additional settings for better security and performance
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True