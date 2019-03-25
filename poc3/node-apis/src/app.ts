import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/appRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
   // public mongoUrl: string = 'mongodb://mongo/Empdb'; // use this when running app on docker
    public mongoUrl: string = 'mongodb://localhost/Empdb'; // use this when running app locally

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // For allowing CORS
        this.app.use(function(req, res, next) {

          res.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
          });

          next();
        });
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
          console.log("connected to db successfully!");
        });
    }
}

export default new App().app;
