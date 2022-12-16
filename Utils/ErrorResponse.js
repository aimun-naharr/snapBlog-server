class ErrorResponse extends Error {
        constructor(message, statusCode) {
                super(message);
                this.status = statusCode;
        }
}

export default ErrorResponse;
