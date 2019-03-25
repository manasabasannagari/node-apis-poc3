"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name'
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
EmployeeSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('Duplicate Email ID!'));
    }
    else {
        next();
    }
});
exports.default = mongoose.model('Employee', EmployeeSchema);
//# sourceMappingURL=EmployeeModel.js.map