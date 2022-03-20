FROM node:16-alpine

WORKDIR /usr/src/server

COPY package.json .
COPY yarn.lock .

RUN yarn
RUN yarn global add nodemon

COPY . .

EXPOSE 4000

CMD ["nodemon", "src/app.js"]
