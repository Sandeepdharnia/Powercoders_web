"""
ASGI config for recipesapi project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os
from whitenoise import WhiteNoise
from django.core.asgi import get_asgi_application

settings_module = 'recipesapi.deployment_settings' if 'RENDER_EXTERNAL_HOSTNAME' in os.environ else 'recipesapi.settings'

application = WhiteNoise(application, root=os.path.join(BASE_DIR, 'staticfiles'))




os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)

application = get_asgi_application()
