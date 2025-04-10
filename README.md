# Powercoders_web

---

### 🐳 **Docker / Docker Compose Commands**

#### Start your full stack

```bash
docker-compose up --build
```

#### Stop the stack

```bash
docker-compose down
```

#### Run docker in back:

Docker-compose up -d

#### Run bash while docker is running

Docker-compose exec backend sh

#### Run migrations inside the backend container

```bash
docker-compose exec backend python manage.py migrate
```

#### Create superuser (admin)

```bash
docker-compose exec backend python manage.py createsuperuser
```

---

### 🐍 **Django Management Commands (run inside container)**

If you're **inside the backend container** (via `docker-compose exec backend bash`):

```bash
# Apply migrations
python manage.py migrate

# Create a Django superuser
python manage.py createsuperuser

# Optional: run the server manually (not needed if Docker handles it)
python manage.py runserver 0.0.0.0:8000

# Run Django unit tests
python manage.py test
```

---

### 🧪 **Testing Your App Without Docker (Local Dev, if needed)**

Make sure you have a `.env` file and `psycopg2`, then:

```bash
python manage.py migrate
python manage.py runserver
```

---

- `docker-compose.yml` already sets up:
  - PostgreSQL service
  - Django backend
  - React frontend
  - Volumes for persistence

---
