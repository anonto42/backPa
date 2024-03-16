import { asyncHendelar } from "../utils/asyncHendelar.js";

const ragisterUser = asyncHendelar(async(req,res)=>{
    res.status(200).json({
        message:'ok'
    })
})

export {ragisterUser}