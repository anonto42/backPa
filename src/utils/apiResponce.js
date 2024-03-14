class apiResponse{
    constructor(
        statusCode,
        data,
        message= 'succes'
    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}
export {apiResponse}


/// this is for prattis 

// class apoo{
//     constructor(
//         statusCode,
//         data,
//         message= 'you are fucked'
//     ){
//         this.statusCode = statusCode
//         this.data = data
//         this.message = message
//         this.success = statusCode < 400
//     }
// }