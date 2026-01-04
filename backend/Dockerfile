FROM node:22

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start"]