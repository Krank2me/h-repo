const buildings = require("./api/buildings");
const users = require("./api/user");

function routes(app) {
  app.use("/api/v1/buildings", buildings);
  app.use("/api/v1/users", users);
}

module.exports = routes;
