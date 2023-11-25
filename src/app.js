const express = require("express");
const compression = require("compression");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db

// init routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome to Shopace",
  });
});

// handling errors

module.exports = app;