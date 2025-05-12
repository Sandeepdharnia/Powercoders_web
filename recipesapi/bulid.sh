set -o errexit

pip install -r requirement.txt

python manage.py migrate 

python manage.py collectstatic --no-input



