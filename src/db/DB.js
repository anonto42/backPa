import mongoose from "mongoose";
import { DB_Name } from "../constents.js";

const DB_Connection = async ()=>{
    try {
        
        const dbInsuline = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log("Your databass connected succesfull at : ", dbInsuline.connection.host)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default DB_Connection