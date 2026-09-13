# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first to leverage Docker layer caching
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build the static site into /app/dist
COPY . .
RUN npm run build

# ---- Serve stage ----
FROM nginx:1.27-alpine AS serve

# Patch OS packages to their latest fixed versions to reduce known CVEs
RUN apk update && apk upgrade --no-cache

# SPA-aware nginx config (fallback to index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy only the compiled static assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
