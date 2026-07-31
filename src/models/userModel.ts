import mongoose, {Schema} from "mongoose";
const userSchema = new Schema({
    fullName:{
        type: String
    },
    age:{
        type: Number
    }, 
    work:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required:true,
    },
    email:{
        type: String,
        unique:true,
        required:true
    },
    address:{
        type: String
    },
    salary:{
        type: Number
    },
    message:{
        type: String
    },
    username:{
        type: String
    },
    password:{
        type: String
    }
}, { timestamps: true });

const User= mongoose.model('User', userSchema);
export default User;
