import express = require("express");
import { EmployeeController } from "../controllers/EmployeeController";
import verifyToken from '../common/verify-token';

const router: express.Router = express.Router();
const employeeController: EmployeeController = new EmployeeController();

// Router level middleware, generally used to avoid multiple middlewares for individual routes.
// Middleware only applicable for 'employee' routes
router.use(verifyToken);

router.route("/")
  //get people list
  .get(employeeController.getEmployees)
  //create new employee
  .post(employeeController.addNewEmployee);

router.route("/:employeeId")
  //get employee details
  .get(employeeController.getEmployeeWithId)
  .put(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

export default router;
