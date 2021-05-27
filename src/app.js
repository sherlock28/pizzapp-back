require("dotenv").config();
const express = require("express");

const app = express();

app.set("port", process.env.PORT);

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

app.use("/api", require("./routes/product.routes"));
app.use("/api", require("./routes/user.routes"));

module.exports = app;
