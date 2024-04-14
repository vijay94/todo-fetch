FROM node:21-alpine3.18 as test

WORKDIR /app

COPY . .

RUN yarn

RUN yarn test

FROM node:21-alpine3.18 as start

WORKDIR /app

COPY . .

RUN yarn

RUN yarn start