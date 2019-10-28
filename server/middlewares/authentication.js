const jwt = require("jsonwebtoken");
const { user } = require("../queries");

const protect = async (req, res, next) => {
  const token = req.header("Authorization");
  console.log("PROTECT TOKEN:", token);
  // No token was found
  if (!token) {
    return res.status(401).send({ msg: "Unauthorized" });
  }
  try {
    console.log("Tok:", token);
    // Verify the token
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    // Check whether the user id and token version is valid
    const { id, token_version } = decoded;
    console.log("DECODED:", decoded);
    const result = await user.read({ id, token_version });
    if (result.length === 0) {
      return res.status(401).send({ msg: "Unauthorized" });
    }
    // Set user as a request property
    req.user = result[0];
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).send(e);
  }
};
// Place it after the protect middleware
const authorize = (roles = []) => {
  if (typeof roles === "string") {
    roles = [roles];
  }
  return (req, res, next) => {
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(401).send({ msg: "Unauthorized" });
    }

    next();
  };
};

module.exports = {
  protect,
  authorize
};
