const mongoose = require("mongoose");
const validator = require("validator");

const BloodBankSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        validate:(value) => {
            if(value < 16){
                return new Error("AGE should be greater than 16");
            }
        }
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Other"]
    },
    mobile:{
        type:Number,
        required:true,
        validate:(value) => {
            if(!validator.isMobilePhone(value.toString(),['en-IN'])){
                return new Error("mobile is not in correct format !");
            }
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate:(value)  => {
            if(!validator.isEmail(value)){
                return new Error("Email is not in correct format !")
            }
        }
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    address:{
        type:String,
        trim:true
    },
    blood_group:{
        type:String,
        required:true,
        trim:true
    },
    pincode:{
        type:Number,
        required:true,
    },
});

const BloodBankModel = new mongoose.model("bloodbanks",BloodBankSchema);

module.exports = BloodBankModel;