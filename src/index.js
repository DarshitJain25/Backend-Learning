import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import connectDB from "./db/index.js";

connectDB();
















/*

APPROACH 1 ---> for establishing db connection

import express from 'express'

const app = express();



 way1: Using normal function 

 function connectDB(){

}

connectDB();

way2 : using iife 



(async () => {
   try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error)=>{
        console.log("Error: ",error);
        throw error;
    }) // listeners in express
    
    app.listen(process.env.PORT,() =>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
}
catch(error){
    console.error("ERROR: ",error);
    throw error;
}
})()

*/