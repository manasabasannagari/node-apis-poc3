"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employeeRoutes_1 = require("./employeeRoutes");
const authRoutes_1 = require("./authRoutes");
const fs = require("fs");
class Routes {
    routes(app) {
        //Modularized Auth routes, shipped to authRoutes.ts
        app.use('/auth', authRoutes_1.default);
        //Modularized employee routes, shipped to employeeRoutes.ts
        app.use('/employee', employeeRoutes_1.default);
        // Index route
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'GET request successfully....'
            });
        });
        // configuring API metadata
        app.route('/oas')
            .get((req, res) => {
            let rawData = fs.readFileSync('./specifications.json');
            let parsedData = JSON.parse(rawData.toString());
            res.status(200).send(parsedData);
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=appRoutes.js.map