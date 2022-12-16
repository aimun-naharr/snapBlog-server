import ErrorResponse from "../Utils/ErrorResponse.js";

const errorHandler = (err, req, res, next) => {
        let error = { ...err };
        error.message = err.message;
        console.log(err)
        if(err.code ===11000){
         const message='Duplicate field value enter'
         error=new ErrorResponse(message, 400)
        }
        if(err.name=== 'validationError'){
         const message= Object.values(err.errors).map(val=>val.message)
         console.log(message);
         error = new ErrorResponse(message, 400)
        }
        res.status(error.status || 500).json({
         success:false,
         error: error.message || 'server error'
        })
};
export default errorHandler;
