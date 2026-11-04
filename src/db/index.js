import mongoose from 'mongoose'
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
    try{
    console.log("Hello, \n",process.env.MONGODB_URI)
    const connectionInstance =  await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected !!! DB HOST: ${connectionInstance.connection.host}`)
    }
    catch(err){
        console.log("MONGO_DB connection Failed ",err);
        process.exit(1); // current application is running on a process
        // study about exit codes
    }
}


export default connectDB;