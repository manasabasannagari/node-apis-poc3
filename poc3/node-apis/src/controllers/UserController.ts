import  User  from "../models/UserModel";
import { Request, Response } from "express";
import config from '../config/common';

const Jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs'),
    SecretKey = config.secret;

export default class UserController {

    public async registerUser(req: Request, res: Response){
        try{
            req.body.password = bcrypt.hashSync(req.body.password, 8);
            const newUser = new User(req.body);
            const user = await newUser.save();
            const token = Jwt.sign({ id: user._id }, SecretKey, {
                expiresIn: 86400 // expires in 24 hours
            });
            return res.status(200).send({ auth: true, token: token });
        } catch(err){
            return res.status(500).send(err.message);
        }
    }

    public async userLogin(req: Request, res: Response){
        try{
            const user = await User.findOne({ email: req.body.email });
            if (!user) return res.status(404).send('No user found.');
            const passwordIsValid = bcrypt.compareSync(req.body.password, user['password']);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
            const token = Jwt.sign({ id: user._id }, SecretKey, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        } catch(err){
            return res.status(500).send('Error on the server.');
        }
    }

}
