const { Router } = require("express");
const { user } = require("../controllers");

const router = Router();

router.post("/register", user.register);

module.exports = router;
