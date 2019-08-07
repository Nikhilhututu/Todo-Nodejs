const url        = 'mongodb+srv://nik87_jain2017:X46UNsozTPCE4y4F@mangocluster-e9bhj.mongodb.net/test?retryWrites=true&w=majority'
const mongoose   = require('mongoose') 
const validator  = require('validator')

const MangooseConnect = ()=>{
    mongoose.connect(url,{
    useNewUrlParser: true,useCreateIndex: true 
   }
 )
}
 const User = new mongoose.model('User',
  {   
    name: 
    { 
      type: String, 
      required: true, 
      trim: true,
      validate(value){ 
        if(validator.isInt(value)){
            throw new Error('Name is invalid')             
        }
    } 
    }, 
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true, 
        validate(value){ 
            if(!validator.isEmail(value)){ 
                throw new Error('Email is invalid')             
            }
        }
     } 
  }) 
  
module.exports = {MangooseConnect,User}
