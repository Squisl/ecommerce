const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Start the server
const port = process.env.PORT || 8081;
const start = async () => {
  try {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
