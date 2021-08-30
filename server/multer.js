const multer = require('multer');

const TYPES = ["image/png", "image/jpeg"];

const storage = multer.diskStorage({
    destination (req, file, cb) {
      cb(null, "uploads/")
    },
    filename (req, file, cb) {
      cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
  if (!TYPES.includes(file.mimetype)) {
    return cb(new Error('Only images are allowed'))
  } else {
    cb(null, true)
  }
}

const upload = multer({ storage, fileFilter })

module.exports = upload;