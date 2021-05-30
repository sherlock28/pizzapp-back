const mongoose = require("mongoose");

const DB =
  process.env.NODE_ENV === "development"
    ? process.env.DATABASE_DOCKER
    : process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(db => console.log("db is connected to", db.connection.name))
  .catch(err => {
    console.error(err);
    console.error("database connection failed");
  });
