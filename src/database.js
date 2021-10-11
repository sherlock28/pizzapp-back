const mongoose = require("mongoose");

const DB =
  process.env.NODE_ENV === "development"
    ? process.env.DATABASE_DOCKER
    : process.env.DATABASE;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("db is connected to", db.connection.name))
  .catch((err) => {
    console.error(err);
    console.error("database connection failed");
  });

function cleanup() {
  mongoose.connection.close(function () {
    console.log("\nMongoose default connection disconnected through app termination");
    console.log("\nGoodbye!");
    process.exit(0);
  });
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
process.on("SIGHUP", cleanup);
