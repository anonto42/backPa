const asyncHendelar = (requestHendelar)=>{
    (req,res,next)=> {
        Promise.resolve(requestHendelar(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHendelar}


/// prattis

// const async = (asyncFunctionForcontactWithDB)=>{
//     (req,res,next)=>{
//         Promise.resolve(asyncFunctionForcontactWithDB(req,res,next)).catch((err)=> next(err))
//     }
// }