import { Request, Response } from "express";
import employeeRouter from './employeeRoutes';
import authRouter from './authRoutes';

import * as fs from 'fs';

export class Routes {
  public routes(app): void {

    //Modularized Auth routes, shipped to authRoutes.ts
    app.use('/auth', authRouter);

    //Modularized employee routes, shipped to employeeRoutes.ts
    app.use('/employee', employeeRouter);

    // Index route
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfully....'
      });
    });

    // configuring API metadata
    app.route('/oas')
      .get((req: Request, res: Response) => {
        let rawData = fs.readFileSync('./specifications.json');
        let parsedData = JSON.parse(rawData.toString());
        res.status(200).send(parsedData);
      });
  }
}
