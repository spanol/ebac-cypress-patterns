
FROM cypress/included:10.0.0

WORKDIR /e2e

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run", "test"]

