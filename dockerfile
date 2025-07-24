
FROM node:18

WORKDIR /e2e

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run", "test"]

