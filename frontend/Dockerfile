# Build stage
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
#COPY frontend/package*.json ./
#RUN npm install
#COPY frontend/ .
COPY . .
RUN npm run build

# Serve with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf
