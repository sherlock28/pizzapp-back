const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const multerConfig = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 6,
  },
}).single("image");

module.exports = multerConfig;