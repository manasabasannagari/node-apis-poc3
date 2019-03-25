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
const common_1 = require("../config/common");
const UserModel_1 = require("../models/UserModel");
const jwt = require('jsonwebtoken'), SecretKey = common_1.default.secret;
exports.default = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const token = req.headers['x-access-token'];
        if (req.method === 'OPTIONS') {
            console.log("Preflight Request");
            return res.status(200).send({ status: 'running!' });
        }
        if (!token) {
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        }
        const decoded = yield jwt.verify(token, SecretKey);
        const user = yield UserModel_1.default.findById(decoded.id);
        if (!user)
            return res.status(404).send("No user found.");
        next();
    }
    catch (err) {
        return res.status(500).send(err);
    }
});
//# sourceMappingURL=verify-token.js.map