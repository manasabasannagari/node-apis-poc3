FROM node:9.6.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@6.0.5

COPY . /usr/src/app

EXPOSE 4200

CMD cd ./client && ng serve --host 0.0.0.0
