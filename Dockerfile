# Global options
FROM node:18.19.0-alpine as base
WORKDIR /app
EXPOSE 4200
# Global options

# Develop options
FROM base as dev
RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=package-lock.json,target=package-lock.json \
  --mount=type=cache,target=/root/.npm \
  npm ci --include=dev
COPY . .
CMD [ "npm", "run", "dev" ]
# Develop options
