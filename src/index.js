import dotenv from 'dotenv';
import DB_Connection from './db/DB.js';
import { app } from './app.js';

dotenv.config({path: "./env"});



DB_Connection()
.then(()=>{
    app.on((err)=>{
        console.log("ther are some error in your server",err)
    })
    app.listen(process.env.PORT || 800 , ()=>{
    console.log(`your server is runing in : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongobd error", err)
})