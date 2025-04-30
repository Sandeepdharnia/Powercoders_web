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

FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Install system and build dependencies
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    build-essential gcc g++ libffi-dev \
    libatlas-base-dev libopenblas-dev liblapack-dev libblas-dev liblapacke-dev \
    netcat-openbsd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Upgrade pip and install build tools
RUN pip install --upgrade pip setuptools wheel cython

# Copy whole project
# COPY . .

# Install backend requirements
COPY ./recipesapi/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


COPY recipesapi/recipesapi/ .

COPY recipesapi/ .
COPY frontend/package*.json ./frontend/
COPY frontend/ ./frontend/

# Expose port
EXPOSE 8000

# Run server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
