const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
    default: "empty-avatar.jpg",
  },
  createdAt: {
    type: String,
    default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh/mm/ss"),
  },
  updatedAt: {
    type: String,
    default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh/mm/ss"),
  },
});

// bcrypt password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// create function to matching password user enter in form and to database
userSchema.methods.isPasswordMatch = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

const UserReg = new mongoose.model("User", userSchema);

module.exports = UserReg;
