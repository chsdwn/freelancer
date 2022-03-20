FROM node:16-alpine

WORKDIR /usr/src/client

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
