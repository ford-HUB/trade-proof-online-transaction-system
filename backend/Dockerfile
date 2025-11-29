FROM node:18

WORKDIR /src

COPY package*.json

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "build"]