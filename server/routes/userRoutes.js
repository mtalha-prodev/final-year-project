const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../database/model/userSchema.js");
const moment = require("moment");
const bcrypt = require("bcryptjs");
// const { verifyToken } = require("../middleware/verifyToken.js");
const { verifyToken } = require("../middleware/verifyToken.js");
const sendToken = require("../utils/jwtToken.js");

const fs = require("fs");

const getUpload = require("./storage.js");
const path = require("path");

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

// user register route
// Access: private
// url: http://localhost:500/api/users/register
// method: POST
// user registration
router.post("/user/register", async (req, res) => {
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
    res.status(502).json({
      status: false,
      errors: error.errors,
      message: "form validatation error...",
    });
  }
});

// user login route
// Access: private
// url: http://localhost:500/api/users/login
// method: POST
// access login
router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.isPasswordMatch(password))) {
    // generate token
    // let token = jwt.sign(
    //   { id: user._id, email: user.email },
    //   process.env.SECRET_KEY,
    //   {
    //     expiresIn: 3600,
    //   }
    // );

    sendToken(user, 200, res);
    // const token = user.getJWTTOKEN();

    // res.status(200).json({
    //   message: "LOGIN SUCCESSFULY",
    //   user: {
    //     email: user.email,
    //     name: user.name,
    //     profile_pic: user.profile_pic,
    //     id: user._id,
    //   },
    //   token: token,
    // });
  } else {
    res.status(404).json({ message: "USER NOT EXIST" });
  }
});

// user logout

router.get("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    status: true,
    message: "Logged out",
  });
});

// user profile pic upload route
// Access: private
// url: http://localhost:500/api/users/profile_pic
// method: POST
// update file user profile pic using multer
router.post("/profile_pic", verifyToken, getUpload, async (req, res) => {
  if (!req.file) {
    res.status(401).json({
      status: false,
      message: "please choose a file...",
    });
  }

  try {
    const temp = {
      profile_pic: req.file.filename,
      updatedAt:
        moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
    };
    const user = await User.findOneAndUpdate({ _id: req.user.id }, temp);
    if (user.profile_pic != "empty-avatar.jpg") {
      fs.unlinkSync("./public/profile_pic/" + user.profile_pic);
    }

    res.status(200).json({
      message: "Uploaded successfully....",
      user: {
        name: user.name,
        id: user._id,
        email: user.email,
        profile_pic: req.file.filename,
      },
    });
  } catch (error) {
    res.status(502).json({
      status: false,
      message: "user not found in database....",
      error,
    });
  }
});

// user change password route
// Access: private
// url: http://localhost:500/api/users/change_password
// method: PUT
// updata user name & password
router.put("/user/change_password", verifyToken, async (req, res) => {
  try {
    const { name, newPassword, newPassword2, oldPassword } = req.body;

    const user = await User.findOne({ _id: req.user.id });
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      res.status(400).json({
        status: false,
        errors: "old password is not match...",
      });
    }
    if (newPassword === newPassword2) {
      // new password hashing
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(newPassword, salt);

      const newData = {
        name: name,
        password: hashPassword,
        updatedAt:
          moment().format("DD/MM/YYYY") + ";" + moment().format("hh/mm/ss"),
      };

      const userUpdate = await User.findOneAndUpdate(
        { _id: req.user.id },
        newData,
        { new: true }
      );
      res.status(200).json({
        status: true,
        user: {
          email: userUpdate.email,
          name: userUpdate.name,
          profile_pic: userUpdate.profile_pic,
          id: userUpdate._id,
        },
        // user: {
        //   name: userUpdata.name,
        //   email: userUpdate.email,
        //   profile_pic: userUpdata.profile_pic,
        //   id: userUpdata._id,
        // },
      });
    } else {
      res.status(405).json({
        status: false,
        errors: "new password is not be matched",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      error,
    });
  }
});

module.exports = router;
