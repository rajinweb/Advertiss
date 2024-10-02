const mongoose = require('mongoose');
const bcrypt= require('bcrypt');
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
}, { collection: 'emp' });

personSchema.pre('save', async function(next) {
    const person = this;
    if(!person.isModified('password')) return next();
    
    // Hash the password only if it has been modified (or is new)
    try{
        // has password generation
        const salt= await bcrypt.genSalt(10);
        
        //hash password
        const hashedPassword= await bcrypt.hash(person.password, salt);

        // Override the plain password with the hashed one
        person.password= hashedPassword;
        next();

    }catch(err){
        next(err);
    }

});

personSchema.methods.comparePassword= async function(candidatePassword){
    try{
        //use bcrypt to compare the provided password with the hashed password
        const isMatch=await bcrypt.compare(candidatePassword, this.password)
        return isMatch;
        
    }catch(err){
       throw err;
    }

}



// create peron model
const Person= mongoose.model('Person', personSchema);
module.exports= Person
