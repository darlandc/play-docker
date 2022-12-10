FROM node:16

WORKDIR /app

COPY package.json .
RUN rm -rf ./node-modules && npm install
COPY  . .
CMD npm start
