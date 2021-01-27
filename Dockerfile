FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install --prod

COPY . .

CMD ["npm", "start"]