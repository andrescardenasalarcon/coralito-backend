FROM node:18

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package*.json ./

COPY . /usr/src/app

RUN npm install

ENV NODE_EN = production

EXPOSE 3200

CMD ["npm", "start"]