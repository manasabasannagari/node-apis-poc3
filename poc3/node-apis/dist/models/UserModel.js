"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});
exports.default = mongoose.model('User', UserSchema);
//# sourceMappingURL=UserModel.js.map