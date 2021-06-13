const multer = require("multer");
const randomString = require("randomstring");
const path = require("path");

// filter to allow file updated or uploaded in database
const fileFilter = (req, file, cb) => {
  const allowType = /jpeg|jpg|png|gif/;
  const isMatchFile = allowType.test(
    path.extname(file.originalname).toLowerCase()
  );
  const isMimeType = allowType.test(file.mimetype);
  if (isMatchFile && isMimeType) {
    cb(null, true);
  } else {
    cb("File is not allow! please select only png,jpeg, jpg, gif");
  }
};

// storaging use with file ext
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/profile_pic");
  },
  filename: (req, file, cb) => {
    const p1 = randomString.generate(7);
    const p2 = randomString.generate(7);
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, p1 + "_" + p2 + ext);
  },
});

// return the sto limirs and filter
const getUpload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 2 },
  fileFilter: fileFilter,
}).single("profile_pic");

module.exports = getUpload;
