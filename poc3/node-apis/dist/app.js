"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const appRoutes_1 = require("./routes/appRoutes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new appRoutes_1.Routes();
        // public mongoUrl: string = 'mongodb://mongo/Empdb'; // use this when running app on docker
        this.mongoUrl = 'mongodb://localhost/Empdb'; // use this when running app locally
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        // For allowing CORS
        this.app.use(function (req, res, next) {
            res.set({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            });
            next();
        });
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log("connected to db successfully!");
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map