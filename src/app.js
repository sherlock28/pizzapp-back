require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multerConfig = require("./config/multer");
const ip = require("ip");

// initializations
const app = express();
require("./database");

// settings
app.set("port", process.env.PORT || 4000);
if (process.env.NODE_ENV === "development")
  process.env.APP_DOMAIN = ip.address() + ":" + process.env.PORT;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multerConfig);

if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}

// routes
app.use("/api/v1", require("./routes/product.routes"));
app.use("/api/v1", require("./routes/user.routes"));
app.use(require("./middlewares").errors.notFound);
app.use(require("./middlewares").errors.handleError);

module.exports = app;
