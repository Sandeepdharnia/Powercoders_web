# FROM python:3.10

# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# WORKDIR /app

# # Install system and build dependencies
# RUN apt-get update && \
#     DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
#     build-essential \
#     gcc \
#     g++ \
#     libffi-dev \
#     libatlas-base-dev \
#     libopenblas-dev \
#     liblapack-dev \
#     libblas-dev \
#     liblapacke-dev \
#     netcat-openbsd \
#     && apt-get clean && rm -rf /var/lib/apt/lists/*


# # Upgrade pip and install core build tools
# RUN pip install --upgrade pip setuptools wheel cython

# # Install blis first (optionally)
# RUN pip install --prefer-binary "blis>=1.2.0,<1.3.0"

# # Install project dependencies
# COPY recipesapi/requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

# # Copy project
# COPY recipesapi/ .
# COPY frontend/package*.json ./frontend/
# COPY frontend/ ./frontend/

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# FROM python:3.10-slim

# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# WORKDIR /app

# # Install system and build dependencies
# RUN apt-get update && \
#     DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
#     build-essential gcc g++ libffi-dev \
#     libatlas-base-dev libopenblas-dev liblapack-dev libblas-dev liblapacke-dev \
#     netcat-openbsd \
#     && apt-get clean && rm -rf /var/lib/apt/lists/*

# # Upgrade pip and install build tools
# RUN pip install --upgrade pip setuptools wheel cython

# # Copy whole project
# # COPY . .

# # Install backend requirements
# COPY ./recipesapi/requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt
# RUN pip install --upgrade dj-database-url


# COPY recipesapi/recipesapi/ .
# COPY recipesapi/manage.py .


# COPY recipesapi/ .
# COPY frontend/package*.json ./frontend/
# COPY frontend/ ./frontend/

# COPY recipesapi/frontend/ ./recipesapi/frontend/

# # Copy built frontend
# # COPY recipesapi/frontend /app/recipesapi/frontend

# #RUN python manage.py migrate
# # ENV DATABASE_URL="${DATABASE_URL}"
# # RUN python manage.py migrate --settings=recipesapi.settings --database=default 
# # Collect static files
# RUN python manage.py collectstatic --noinput


# # Expose port
# EXPOSE 8000

# # Run server
# # CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# COPY start.sh /app/start.sh
# RUN chmod +x /app/start.sh
# CMD ["/app/start.sh"]

# # Run app with Gunicorn (better for production)
# CMD ["gunicorn", "recipesapi.wsgi:application", "--bind", "0.0.0.0:8000"]
# # CMD ["sh", "-c", "python manage.py migrate && gunicorn recipesapi.wsgi:application --bind 0.0.0.0:8000"]
# # CMD ["sh", "-c", "python manage.py migrate"]


FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install system and build dependencies
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    build-essential gcc g++ libffi-dev \
    libatlas-base-dev libopenblas-dev liblapack-dev libblas-dev liblapacke-dev \
    netcat-openbsd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Upgrade pip and core Python tools
RUN pip install --upgrade pip setuptools wheel cython dj-database-url

# Copy requirements and install
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
# COPY recipesapi/recipesapi/ /app/recipesapi/
# COPY recipesapi/api2/ /app/recipesapi/
COPY manage.py /app/
# COPY manage.py /app/recipesapi/
# COPY recipesapi/frontend/ /app/frontend/  
# optional for built frontend

# Optional: copy frontend React/Vite/Vue app for build (you can build in CI instead)
COPY frontend/package*.json /app/frontend/
COPY frontend/ /app/frontend/

# Copy start script
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Expose Django port
EXPOSE 8000

# Final command (Render will execute this)
CMD ["/app/start.sh"]
