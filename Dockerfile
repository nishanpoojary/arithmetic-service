FROM node:latest

WORKDIR /usr/src 
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src

CMD node src/index.js
