FROM node:14.14-alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

RUN apk update && apk upgrade
RUN apk add git
RUN apk add yarn

COPY . /usr/src
RUN yarn install

RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]
