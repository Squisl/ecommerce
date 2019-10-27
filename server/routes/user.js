const { Router } = require("express");
const { user } = require("../controllers");
const { schemas, check } = require("../middlewares/validation");
const { protect } = require("../middlewares/authentication");

const router = Router();

router.post("/register", check(schemas.register, "body"), user.register);
router.post("/login", check(schemas.login, "body"), user.login);

module.exports = router;
