# Global options
ARG NODE_VERSION=18.20.0
FROM node:${NODE_VERSION}-alpine as base
RUN npm update -g
RUN npm i -g @angular/cli
WORKDIR /app
EXPOSE 4200
# Global options

# Develop options
FROM base AS dev
RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=package-lock.json,target=package-lock.json \
  --mount=type=cache,target=/root/.npm \
  npm ci
COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]
# Develop options
