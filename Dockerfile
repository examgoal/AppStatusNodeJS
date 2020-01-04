FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install --prod

COPY . .

EXPOSE 3000

CMD ["npm", "start"]