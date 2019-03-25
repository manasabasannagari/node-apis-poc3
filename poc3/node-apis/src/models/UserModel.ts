import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String
    },
    email: {
        type: String
    },
    password : {
        type : String
    }
});

export default mongoose.model('User', UserSchema);