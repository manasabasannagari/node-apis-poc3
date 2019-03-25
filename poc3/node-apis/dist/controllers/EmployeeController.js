"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeModel_1 = require("../models/EmployeeModel");
class EmployeeController {
    addNewEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newEmployee = new EmployeeModel_1.default(req.body);
                const employee = yield newEmployee.save();
                return res.json(employee);
            }
            catch (err) {
                return res.status(500).send(err);
            }
        });
    }
    getEmployees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield EmployeeModel_1.default.find({});
                res.status(200).json(employee);
            }
            catch (err) {
                return res.status(500).send(err);
            }
        });
    }
    getEmployeeWithId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield EmployeeModel_1.default.findById(req.params.employeeId);
                res.status(200).json(employee);
            }
            catch (err) {
                return res.status(500).send(err);
            }
        });
    }
    updateEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield EmployeeModel_1.default.findOneAndUpdate({ _id: req.params.employeeId }, req.body, { upsert: true });
                res.status(200).json(employee);
            }
            catch (err) {
                return res.status(500).send(err);
            }
        });
    }
    deleteEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield EmployeeModel_1.default.deleteOne({ _id: req.params.employeeId });
                res.status(200).json({ message: 'Successfully deleted Employee!' });
            }
            catch (err) {
                return res.status(500).send(err);
            }
        });
    }
}
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=EmployeeController.js.map