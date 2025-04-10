# Use official Python image
FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    netcat-openbsd gcc postgresql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install blis and cython as prebuilt wheels to avoid source compilation
RUN pip install --prefer-binary "blis>=1.2.0,<1.3.0" "cython"


# Install the rest
COPY recipesapi/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


# Copy project files
COPY recipesapi/ .
COPY frontend/package*.json ./frontend/
COPY frontend/ ./frontend/

# Run server (we'll override this in docker-compose)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
