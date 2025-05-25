#!/usr/bin/env bash
set -o errexit

echo "Running database migrations..."
python manage.py migrate --noinput --settings=recipesapi.deployment_settings

echo "Collecting static files..."
python manage.py collectstatic --noinput --settings=recipesapi.deployment_settings

echo "Starting server..."
gunicorn recipesapi.wsgi:application --bind 0.0.0.0:$PORT --env DJANGO_SETTINGS_MODULE=recipesapi.deployment_settings
