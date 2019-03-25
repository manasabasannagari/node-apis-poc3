import express = require("express");
import UserController from '../controllers/UserController';

const router: express.Router = express.Router();
const userController: UserController = new UserController();


//user Registration
router.post("/register",userController.registerUser);
//user login
router.post("/login",userController.userLogin);

export default router;
