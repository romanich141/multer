const { Router } = require("express");
const fileMiddleware = require("./multer");

const router = Router();

router.post("/upload", fileMiddleware.single("avatar"), (req, res) => {
    try {
        req.file && res.json(req.file);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;