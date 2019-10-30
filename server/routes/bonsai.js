const { Router } = require("express");
const multer = require("multer");
const { bonsai } = require("../controllers");

const router = Router();

router.post("/", bonsai.create);

module.exports = router;
