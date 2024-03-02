# Global options
ARG NODE_VERSION=18.19.1
FROM node:${NODE_VERSION}-alpine as base
RUN corepack enable
WORKDIR /app
EXPOSE 4200
# Global options

# Develop options
FROM base AS dev
RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
  --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install
COPY . .
CMD ["pnpm", "dev"]
# Develop options
