const mongoose = require("mongoose");
const logger = require("./config/logger");

const connStr =
  process.env.NODE_ENV === "development"
    ? process.env.DATABASE_DOCKER
    : process.env.DATABASE;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => logger.info(`db is connected to ${db.connection.name}`))
  .catch((err) => {
    logger.error(err);
    logger.error("database connection failed");
  });

function cleanup() {
  mongoose.connection.close(function () {
    logger.info("\nMongoose default connection disconnected through app termination");
    logger.info("\nGoodbye!");
    process.exit(0);
  });
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
process.on("SIGHUP", cleanup);
