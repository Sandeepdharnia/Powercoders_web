# Powercoders_web

# 🍽️ Recipe Sharing Web Application

This is a full-stack recipe sharing web application where users can register, log in, 
and upload their favorite recipes. Users must be authenticated to submit new recipes. 
The application supports user authentication and recipe management through a clean and responsive interface.

## 🚀 Features

- User registration and authentication (login/logout)
- Upload and share recipes (authentication required)
- View recipes posted by others
- Responsive frontend UI
- Backend API for recipe and user management

## 🧰 Tech Stack

### Frontend
- **React**: For building the user interface
- Axios: For API communication

### Backend
- **Django**: Backend web framework
- **Django REST Framework**: For building RESTful APIs

### Database
- **SQLite**: Used during local development
- **PostgreSQL on Render**: Used for deployment

## ⚙️ Installation

### Prerequisites
- Node.js
- Python 3.10
- pip / virtualenv
- PostgreSQL (optional for local testing)

### Backend Setup
```bash
cd backend
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

## Project Structure 

Powercoders_web/
├── frontend/
├── recipesapi
	├── recipesapi
	├── manage.py
	├── db.sqlite3
	├── requirements.txt
	├── api2
	├── frontend “this is copy of build folder”
├── docker-compose.yml
├── Dockerfile
├── .env

##📝 License
This project is open source and available under the MIT License.


##👨‍💻 Author
Made with ❤️ by Sandeep Dharnia.
Feel free to connect or contribute!


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
