const mongoose = require('mongoose');
const {Schema}=mongoose;
const personSchema = new Schema({
    name:{
        type: String
    },
    age:{
        type: Number
    }, 
    work:{
        type: String,
       // enum:['chef', 'waiter', 'manager'],
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
    }
}, { collection: 'emp' });

// create peron model
const Person= mongoose.model('Person', personSchema);
module.exports= Person
