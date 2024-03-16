import dotenv from 'dotenv';
import DB_Connection from './db/DB.js';
import { app } from './app.js';

dotenv.config({path: "./env"});



DB_Connection()
.then(()=>{
    // app.on((err)=>{
    //     console.log("ther are some error in your server",err)
    // })
    app.listen(process.env.PORT || 7000 ,console.log(`this surver is runing on ${process.env.PORT}`) )
})
.catch((err)=>{
    console.log("mongobd error", err)
})