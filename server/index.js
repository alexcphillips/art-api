const { app } = require("./app");
const { mongoConnect } = require("./database");

(async () => {
  await mongoConnect();

  app.listen(3000, () => {
    console.log("Server started SUCCESSFULLY");
  });
})();
