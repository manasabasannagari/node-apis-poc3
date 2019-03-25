import config from '../config/common';
import User from '../models/UserModel';

const jwt = require('jsonwebtoken'), SecretKey = config.secret;

export default async (req, res, next) => {

  try {
    const token = req.headers['x-access-token'];
    if(req.method === 'OPTIONS') {
      console.log("Preflight Request");
      return res.status(200).send({status:'running!'});
    }
    if (!token) {
      return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
    const decoded = await jwt.verify(token, SecretKey);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).send("No user found.");
    next();
  } catch (err) {
      return res.status(500).send(err);
  }
}
