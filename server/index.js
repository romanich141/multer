const express = require("express");
const multer  = require('multer');
const path = require("path");


const app = express();
const PORT = 5050;

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"))
  },
  filename (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})

const upload = multer({ storage })

const uploadFile = upload.single("avatar");

app.post('/avatar', uploadFile, function (req, res, next) {
  console.log({ file: req.file, body: req.body })
  // req.file - файл `avatar`
  // req.body сохранит текстовые поля, если они будут
})

app.get("/", (req, res) => {
  res.send("hello server")
})

app.listen(PORT, () => {
  console.log(`server started in port ${ PORT }...`)
})