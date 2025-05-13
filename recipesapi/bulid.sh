# set -o errexit

# pip install -r recipesapi/requirements.txt

# python manage.py migrate --settings=recipesapi.deployment_settings

# # Collect static files
# python manage.py collectstatic --no-input --settings=recipesapi.deployment_settings

# # python manage.py migrate 

# # python manage.py collectstatic --no-input



#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "Creating build.sh script..."
echo "This script will be executed during the build process on Render"

# Print environment info for debugging (sanitized)
echo "DJANGO_SETTINGS_MODULE: $DJANGO_SETTINGS_MODULE"
echo "DATABASE_URL: [present: $(if [ -n "$DATABASE_URL" ]; then echo "yes"; else echo "no"; fi)]"
echo "RENDER_EXTERNAL_HOSTNAME: $RENDER_EXTERNAL_HOSTNAME"

# Install dependencies
echo "Installing Python dependencies..."
pip install -r recipesapi/requirements.txt

# Apply database migrations
echo "Applying database migrations..."
python manage.py makemigrations --settings=recipesapi.deployment_settings
python manage.py migrate --settings=recipesapi.deployment_settings --noinput

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput --settings=recipesapi.deployment_settings

echo "Build script completed successfully!"