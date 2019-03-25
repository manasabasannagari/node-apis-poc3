# node-apis


* You need to install **nodejs, mongodb and typescript**.
* Make sure that you have NodeJS installed on your machine. After that, you have to install TypeScript and TypeScript Node.
    **npm install -g typescript ts-node**
* Install all the dependencies like express, body-parser, mongoose and nodemon
    **npm install --save @types/express express body-parser mongoose nodemon**
* To compile all **ts** files to **js** run **tsc**.
* You need to run the app using **npm run dev** command.
* To run the app from docker containers, go through the following steps:
  - Build node and mongo images: **docker-compose build**
  - To run the services and attach containers to it: **docker-compose up**

