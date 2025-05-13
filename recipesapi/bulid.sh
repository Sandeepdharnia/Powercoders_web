set -o errexit

pip install -r recipesapi/requirements.txt

python manage.py migrate --settings=recipesapi.deployment_settings

# Collect static files
python manage.py collectstatic --no-input --settings=recipesapi.deployment_settings

# python manage.py migrate 

# python manage.py collectstatic --no-input



