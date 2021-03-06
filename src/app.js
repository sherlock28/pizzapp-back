require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { multer } = require("./config");
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
app.use(multer);

if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
  const swaggerSpec = require("./config/swagger");
  app.use("/api/v1/doc", require("swagger-ui-express").serve, require("swagger-ui-express").setup(require("swagger-jsdoc")(swaggerSpec)));
}

// routes
app.use("/api/v1", require("./routes/product.routes"));
app.use("/api/v1", require("./routes/user.routes"));
app.use("/api/v1", require("./routes/cart.routes"));
app.use("/api/v1", require("./routes/others.routes"));
app.use(require("./middlewares").errors.notFound);
app.use(require("./middlewares").errors.handleError);

module.exports = app;
