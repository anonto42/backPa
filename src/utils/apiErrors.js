class apiErrors extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""  
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = null
        this.errors = errors

        if (stack) {
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.contructor)
        }
    }
}

export {apiErrors}