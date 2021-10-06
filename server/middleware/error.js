const ErrorHandler = require("../utils/errorHandler.js");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  res.status(err.statusCode).json({
    status: false,
    error: err,
  });
};
