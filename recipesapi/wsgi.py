"""
WSGI config for recipesapi project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os

from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '.env')
load_dotenv(dotenv_path)

from django.core.wsgi import get_wsgi_application

print("Database URL from wsgi.py:", os.environ.get('DATABASE_URL'))

settings_module = 'recipesapi.deployment_settings' if 'RENDER_EXTERNAL_HOSTNAME' in os.environ else 'recipesapi.settings'


# os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'recipesapi.deployment_settings')

application = get_wsgi_application()
