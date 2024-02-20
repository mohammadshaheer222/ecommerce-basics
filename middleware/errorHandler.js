const errorHandlerMiddleware = (error, req, res, next) => {
    if(error instanceof CustomAPIError) {
        res.status(error.status).json({msg: error.message})
    }
    res.status(500).json({msg: "Something went wrong.Try again.."})
}

module.exports = errorHandlerMiddleware;