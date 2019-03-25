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
const UserModel_1 = require("../models/UserModel");
const common_1 = require("../config/common");
const Jwt = require('jsonwebtoken'), bcrypt = require('bcryptjs'), SecretKey = common_1.default.secret;
class UserController {
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.password = bcrypt.hashSync(req.body.password, 8);
                const newUser = new UserModel_1.default(req.body);
                const user = yield newUser.save();
                const token = Jwt.sign({ id: user._id }, SecretKey, {
                    expiresIn: 86400 // expires in 24 hours
                });
                return res.status(200).send({ auth: true, token: token });
            }
            catch (err) {
                return res.status(500).send(err.message);
            }
        });
    }
    userLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserModel_1.default.findOne({ email: req.body.email });
                if (!user)
                    return res.status(404).send('No user found.');
                const passwordIsValid = bcrypt.compareSync(req.body.password, user['password']);
                if (!passwordIsValid)
                    return res.status(401).send({ auth: false, token: null });
                const token = Jwt.sign({ id: user._id }, SecretKey, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200).send({ auth: true, token: token });
            }
            catch (err) {
                return res.status(500).send('Error on the server.');
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map