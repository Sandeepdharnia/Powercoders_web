#!/usr/bin/env bash
set -o errexit

# export PYTHONPATH=$PYTHONPATH:/app/
# export PYTHONPATH=/app/recipesapi/:/app/
export PYTHONPATH=/app/

echo "Running migrations..."
python manage.py migrate --noinput --settings=recipesapi.deployment_settings

echo "Collecting static files..."
python manage.py collectstatic --noinput --settings=recipesapi.deployment_settings

echo "Starting Gunicorn..."
# gunicorn recipesapi.wsgi:application --bind 0.0.0.0:$PORT --env DJANGO_SETTINGS_MODULE=recipesapi.deployment_settings
exec gunicorn recipesapi.wsgi:application \
    --bind 0.0.0.0:8000 \
    --env DJANGO_SETTINGS_MODULE=recipesapi.deployment_settings


# echo "Container paused for inspection."
# tail -f /dev/null # Keeps the container running