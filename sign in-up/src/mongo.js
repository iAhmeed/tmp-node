const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Login")
.then(()=>{
    console.log('mongoose connected');
})
.catch(()=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model('LogInCollection',logInSchema)

module.exports=collection