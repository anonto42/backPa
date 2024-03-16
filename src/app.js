import Express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

// express inselise
const app = Express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(Express.json({limit:"10kb"}))
app.use(Express.urlencoded({limit:"10kb",extended: true}))
app.use(Express.static("Public"))
app.use(cookieParser())

// import routes
import userRouter from "./routes/user.routes.js";



// router decelaration

app.use("/api/v1/users",userRouter);


export {app}