const jwt = require("jsonwebtoken");
const User = require("../database/model/userSchema.js");

exports.verifyToken = async (req, res, next) => {
  try {
    // const token = req.headers["x-access-token"];
    const { token } = req.cookies;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    console.log(`verify ${user.role}`);
    req.user = {
      id: user._id,
    };
  } catch (error) {
    res.status(401).json({
      status: false,
      message: " jwt token is not found....",
    });
  }

  next();
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};

// module.exports = {verifyToken};
