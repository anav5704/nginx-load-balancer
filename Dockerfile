FROM node:18-alpine 

WORKDIR /app

COPY src ./src
COPY package.json .
COPY tsconfig.json .

RUN npm install 

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]