FROM node:10

COPY package*.json ./
COPY index.js ./index.js

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start"]
