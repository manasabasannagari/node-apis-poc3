"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserController_1 = require("../controllers/UserController");
const router = express.Router();
const userController = new UserController_1.default();
//user Registration
router.post("/register", userController.registerUser);
//user login
router.post("/login", userController.userLogin);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map