# # FROM python:3.10

# # ENV PYTHONDONTWRITEBYTECODE 1
# # ENV PYTHONUNBUFFERED 1

# # WORKDIR /app

# # # Install system and build dependencies
# # RUN apt-get update && \
# #     DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
# #     build-essential \
# #     gcc \
# #     g++ \
# #     libffi-dev \
# #     libatlas-base-dev \
# #     libopenblas-dev \
# #     liblapack-dev \
# #     libblas-dev \
# #     liblapacke-dev \
# #     netcat-openbsd \
# #     && apt-get clean && rm -rf /var/lib/apt/lists/*


# # # Upgrade pip and install core build tools
# # RUN pip install --upgrade pip setuptools wheel cython

# # # Install blis first (optionally)
# # RUN pip install --prefer-binary "blis>=1.2.0,<1.3.0"

# # # Install project dependencies
# # COPY recipesapi/requirements.txt .
# # RUN pip install --no-cache-dir -r requirements.txt

# # # Copy project
# # COPY recipesapi/ .
# # COPY frontend/package*.json ./frontend/
# # COPY frontend/ ./frontend/

# # CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

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


# COPY recipesapi/recipesapi/ .
# COPY recipesapi/manage.py .


# COPY recipesapi/ .
# COPY frontend/package*.json ./frontend/
# COPY frontend/ ./frontend/

# COPY recipesapi/frontend/ ./recipesapi/frontend/

# # Copy built frontend
# # COPY recipesapi/frontend /app/recipesapi/frontend

# # RUN python manage.py migrate
# # ENV DATABASE_URL="${DATABASE_URL}"
# WORKDIR /app/recipesapi
# RUN python manage.py migrate --settings=recipesapi.settings --database=default
# # Collect static files
# RUN python manage.py collectstatic --noinput


# # Expose port
# EXPOSE 8000

# # Run server
# # CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# # Run app with Gunicorn (better for production)
# #CMD ["gunicorn", "recipesapi.wsgi:application", "--bind", "0.0.0.0:8000"]
# CMD ["sh", "-c", "python manage.py migrate && gunicorn recipesapi.wsgi:application --bind 0.0.0.0:8000"]
# # CMD ["sh", "-c", "python manage.py migrate"]



FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    build-essential gcc g++ libffi-dev \
    libatlas-base-dev libopenblas-dev liblapack-dev libblas-dev liblapacke-dev \
    netcat-openbsd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Upgrade pip and install build tools
RUN pip install --upgrade pip setuptools wheel cython

# Copy requirements and install dependencies
COPY ./recipesapi/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire recipesapi directory into /app/
COPY ./recipesapi/ /app/recipesapi/

# Copy the frontend
COPY frontend/package*.json ./frontend/
COPY frontend/ ./frontend/
COPY recipesapi/frontend/ ./recipesapi/frontend/

WORKDIR /app/recipesapi  # Set working directory to where manage.py is

RUN python manage.py migrate --settings=recipesapi.settings --database=default
RUN python manage.py collectstatic --noinput

EXPOSE 8000

CMD ["sh", "-c", "python manage.py migrate && gunicorn recipesapi.wsgi:application --bind 0.0.0.0:8000"]