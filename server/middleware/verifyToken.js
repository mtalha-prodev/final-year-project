const jwt = require("jsonwebtoken");
const User = require("../database/model/userSchema.js");

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
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

module.exports = verifyToken;
