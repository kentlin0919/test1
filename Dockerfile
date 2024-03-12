FROM node:20-alpine3.19

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install



CMD [ "npm","run","dev" ] 

COPY . .

EXPOSE 8080

