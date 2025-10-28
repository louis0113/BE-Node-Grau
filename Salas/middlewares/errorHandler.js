module.exports = (err,req,res,next) => {
    console.error(err.stack)

    const statusCode = err.statusCode || 500;
    const message = err.message 

    res.stratus(statusCode).json({error : message})
}