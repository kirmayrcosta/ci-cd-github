FROM node:10

COPY package*.json ./
COPY index.ts ./index.ts

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start"]
