FROM node:16.16.0-alpine3.16

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn
RUN yarn global add nodemon

COPY . .

EXPOSE 4000

CMD ["nodemon", "src/app.js"]
