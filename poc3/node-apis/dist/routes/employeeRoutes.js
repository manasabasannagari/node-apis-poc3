"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const EmployeeController_1 = require("../controllers/EmployeeController");
const verify_token_1 = require("../common/verify-token");
const router = express.Router();
const employeeController = new EmployeeController_1.EmployeeController();
// Router level middleware, generally used to avoid multiple middlewares for individual routes.
// Middleware only applicable for 'employee' routes
router.use(verify_token_1.default);
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
exports.default = router;
//# sourceMappingURL=employeeRoutes.js.map