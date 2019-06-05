const User = require("../models/user");

module.exports = (router) => {
  router.post("/register", (req, res) => {
    res.send("authentication is done");
  });
  return router;
}
