const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../database/model/userSchema.js");
const moment = require("moment");
const verifyToken = require("../middleware/verifyToken.js");

const getUpload = require("./storage.js");

// set logic to uploadImage image in database

// ROUTE
// ACCESS REGISTER

router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({ data });
    res.send({ data });
  } catch (error) {
    res.status(400).json({ message: "not found" });
  }
});
// user registration
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      res.status(409).json({ message: "user already exist" });
    }
    const user = await new User({ name, email, password });
    await user.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(502).json({ message: error });
  }
});

// access login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.isPasswordMatch(password))) {
    // generate token
    let token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: 3600,
      }
    );

    res.status(200).json({
      message: "LOGIN SUCCESSFULY",
      user: {
        email: user.email,
        name: user.name,
        profile_pic: user.profile_pic,
        id: user._id,
      },
      token: token,
    });
  } else {
    res.status(404).json({ message: "USER NOT EXIST" });
  }
});

// update file user profile pic using multer
router.post("/profile_pic", verifyToken, getUpload, async (req, res) => {
  if (!req.file) {
    res.status(400).json({
      status: false,
      message: "please choose a file...",
    });
  } else {
    try {
      const temp = {
        profile_pic: req.file.filename,
        updatedAt:
          moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
      };
      const updatedData = await User.findByIdAndUpdate(
        { _id: req.user.id },
        temp,
        { new: true }
      );

      res.status(200).json({
        message: "Uploaded successfully....",
        user: updatedData,
      });
    } catch (error) {
      res.status(401).json({
        status: false,
        message: "user not found in database....",
        error,
      });
    }
  }
});

module.exports = router;
