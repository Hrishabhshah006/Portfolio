# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first to leverage Docker layer caching
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build the static site into /app/dist
COPY . .
RUN npm run build

# ---- Serve stage ----
FROM nginx:alpine AS serve

# SPA-aware nginx config (fallback to index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy only the compiled static assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
