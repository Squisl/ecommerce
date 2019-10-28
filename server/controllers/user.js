const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { user } = require("../queries");
const createToken = require("../utilities/createToken");

const register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    // Check whether email address is already taken
    const result = await user.read({ email });
    if (result.length > 0) {
      return res
        .status(409)
        .send({ msg: "Email address is already registered" });
    }
    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 12);
    // Insert to the database
    const newUser = await user.create({
      first_name,
      last_name,
      email,
      password: hashedPassword
    });
    // Create refresh and access token
    const { id, token_version } = newUser;
    const refreshToken = createToken(
      { id, token_version },
      process.env.REFRESH_SECRET,
      process.env.REFRESH_EXPIRATION
    );
    // Save refresh token in a cookie
    res.cookie("jwt", refreshToken, {
      maxAge: parseInt(process.env.REFRESH_EXPIRATION),
      httpOnly: true,
      sameSite: true,
      secure: false
    });
    const accessToken = createToken(
      { id, token_version },
      process.env.ACCESS_SECRET,
      5
    );
    return res
      .status(201)
      .send({ token: accessToken, user: { id, first_name, last_name, email } });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check whether a user is registered with the email address
    const result = await user.read({ email });
    if (result.length === 0) {
      return res.status(404).send({ msg: "Email address not found" });
    }
    const fetchedUser = result[0];
    // Check whether the passwords match
    const match = await bcrypt.compare(password, fetchedUser.password);
    if (!match) {
      return res.status(401).send({ msg: "Wrong Password" });
    }
    // Create refresh and access token
    const { id, token_version, first_name, last_name } = fetchedUser;
    const refreshToken = createToken(
      { id, token_version },
      process.env.REFRESH_SECRET,
      process.env.REFRESH_EXPIRATION
    );
    // Save refresh token in a cookie
    res.cookie("jwt", refreshToken, {
      maxAge: parseInt(process.env.REFRESH_EXPIRATION),
      httpOnly: true,
      sameSite: true,
      secure: false
    });
    const accessToken = createToken(
      { id, token_version },
      process.env.ACCESS_SECRET,
      5
    );
    return res.send({
      token: accessToken,
      user: { id, first_name, last_name, email }
    });
  } catch (e) {
    console.error(e);
  }
};

const logout = (_, res) => {
  res.clearCookie("jwt");
  res.send({ msg: "success" });
};

const reload = async (req, res) => {
  const { id, first_name, last_name, email } = req.user;
  res.send({ id, first_name, last_name, email });
};

const refresh_token = async (req, res) => {
  console.log("REQ Cookies:", req.cookies.jwt);
  const token = req.cookies.jwt;
  if (!token) {
    return res.send({ ok: false, accessToken: "" });
  }
  let decoded;
  let fetchedUser;
  try {
    decoded = await jwt.verify(token, process.env.REFRESH_SECRET);
    console.log("DECOD:", decoded);
    result = await user.read({
      id: decoded.id,
      token_version: decoded.token_version
    });
    fetchedUser = result[0];
  } catch (e) {
    console.error(e);
  }

  if (!fetchedUser) {
    return res.send({ ok: false, accessToken: "" });
  }
  console.log("FETCHED_USER:", fetchedUser);
  const { id, token_version } = fetchedUser;
  return res.send({
    ok: true,
    accessToken: createToken(
      { id, token_version },
      process.env.ACCESS_SECRET,
      5
    )
  });
};

module.exports = {
  register,
  login,
  logout,
  reload,
  refresh_token
};
