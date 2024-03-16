const asyncHendelar = (requestHendelar)=>{
    return (req,res,next)=> {
        Promise.resolve(requestHendelar(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHendelar}