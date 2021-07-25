const app = require("./app");

const server = app.listen(app.get("port"), () => {
  console.log(`Server Running`);
  if (process.env.NODE_ENV === "development") {
    console.log(`Local:            http://localhost:${process.env.PORT}`);
    console.log(`On Your Network:  http://${process.env.APP_DOMAIN}`);
  }
});

module.exports = { app, server };
