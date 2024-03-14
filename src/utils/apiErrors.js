class apiErrors extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck = ""  
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = null
        this.errors = errors

        if (statck) {
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.contructor)
        }
    }
}

export {apiErrors}