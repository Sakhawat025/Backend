
// Custom error class extending built-in Erro
class ApiError extends Error{
    constructor(
        statusCode,
        message= "somthing went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack){
            this.stack = this.stack // Assign provided stack
        }else{
            Error:captureStackTrace(
                this, this.constructor 
            ) // Capture clean stack trace
        }
    }
}

export {ApiError}