FROM node:12

COPY package*.json ./
COPY index.ts ./index.ts
COPY route.ts ./route.ts
COPY setup.ts ./setup.ts


RUN npm install --only=prod

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start"]
