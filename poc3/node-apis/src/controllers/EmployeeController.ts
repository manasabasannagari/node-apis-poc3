import Employee from "../models/EmployeeModel";
import { Request, Response } from "express";

export class EmployeeController {

    public async addNewEmployee(req: Request, res: Response) {
        try{
            const newEmployee = new Employee(req.body);
            const employee = await newEmployee.save();
            return res.json(employee);
        }
        catch(err) {
            return res.status(500).send(err);
        }
    }

    public async getEmployees(req: Request, res: Response) {
        try{
            const employee = await Employee.find({});
            res.status(200).json(employee);
        } catch(err){
            return res.status(500).send(err);
        }
    }

    public async getEmployeeWithId(req: Request, res: Response) {
        try {
            const employee = await Employee.findById(req.params.employeeId);
            res.status(200).json(employee);
        } catch(err){
            return res.status(500).send(err);
        }
        
    }

    public async updateEmployee(req: Request, res: Response) {
        try {
            const employee = await Employee.findOneAndUpdate({ _id: req.params.employeeId }, req.body, { upsert: true });
            res.status(200).json(employee);
        } catch (err){
            return res.status(500).send(err);
        }
    }

    public async deleteEmployee(req: Request, res: Response) {
        try {
            await Employee.deleteOne({ _id: req.params.employeeId });
            res.status(200).json({ message: 'Successfully deleted Employee!'});
        } catch(err) {
            return res.status(500).send(err);
        }
    }

}
