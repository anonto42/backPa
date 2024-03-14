import Express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

// express inselise
const app = Express();
// cors
// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//     credentials:true
// }))

// app.use(Express.json({limit:"10kb"}))
// app.use(Express.urlencoded({limit:"10kb",extended:true}))
// app.use(Express.static("Public"))
// app.use(cookieParser())

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(Express.json({limit:"10kb"}))
app.use(Express.urlencoded({limit:"10kb",extended: true}))
app.use(Express.static("Public"))
app.use(cookieParser())


export {app}