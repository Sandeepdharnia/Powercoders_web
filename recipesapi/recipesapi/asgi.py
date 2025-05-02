"""
ASGI config for recipesapi project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os
from whitenoise import WhiteNoise

application = WhiteNoise(application, root=os.path.join(BASE_DIR, 'staticfiles'))


from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'recipesapi.settings')

application = get_asgi_application()
