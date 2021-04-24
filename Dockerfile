FROM node:10

COPY package*.json ./
COPY index.js ./index.js

RUN npm install

ENTRYPOINT [ "npm", "run", "start"]
