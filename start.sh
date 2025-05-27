#!/usr/bin/env bash
set -o errexit

# Change to the application directory first
cd /app

# Ensure /app is on the PYTHONPATH.
# It might already be picked up by 'cd /app', but being explicit is safer.
# Using 'export PYTHONPATH=.' or 'export PYTHONPATH=$(pwd)' if you want it dynamic.
# Or just keep 'export PYTHONPATH=/app/' as it is, as it's correctly hardcoded.
#export PYTHONPATH=/app/
export PYTHONPATH=.:$PYTHONPATH

echo "Running migrations..."
python manage.py migrate --noinput --settings=recipesapi.deployment_settings

echo "Collecting static files..."
python manage.py collectstatic --noinput --settings=recipesapi.deployment_settings

echo "Starting Gunicorn..."
exec gunicorn recipesapi.wsgi:application \
    --bind 0.0.0.0:8000 \
    --env DJANGO_SETTINGS_MODULE=recipesapi.deployment_settings