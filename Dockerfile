FROM node:18.17.0-bullseye-slim AS builder
ARG APP_HOST
ARG APP_PORT
ARG BACKEND_URL
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
ENV NODE_ENV=production

COPY . ./
RUN yarn run build:prod


FROM node:18.17.0-bullseye-slim AS release
ENV APP_HOST=$APP_HOST
ENV APP_PORT=$APP_PORT
ENV BACKEND_URL=$BACKEND_URL
ENV NODE_ENV=production
USER node
WORKDIR /app

COPY package*.json ./
RUN yarn install --production --frozen-lockfile
COPY --from=builder /app/dist /app/dist

CMD ["node", "./dist/server.js"]