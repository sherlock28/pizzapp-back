const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(db => console.log("db is connected"))
  .catch(err => {
    console.error(err);
    console.error("database connection failed");
  });
