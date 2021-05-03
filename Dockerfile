FROM node:16-alpine3.11

WORKDIR /app
COPY . /app

RUN npm install
RUN npm i -g @nestjs/cli

CMD ["nest", "start", "--watch"]
