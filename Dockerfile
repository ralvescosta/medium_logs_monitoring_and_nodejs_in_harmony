FROM node:14

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3333

CMD ["node", "src/main.js"]