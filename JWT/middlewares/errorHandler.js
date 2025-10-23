const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statuusCode = err.statusCode || 500;
  const message = err.message || "Something wrong";

  res.status(statusCode).json({ error: message });
};

module.exports = errorHandler;
