const { Router } = require("express");
const user = require("./user");
const bonsai = require("./bonsai");

const router = Router();

router.use("/api/user", user);
router.use("/api/bonsai", bonsai);

module.exports = router;
