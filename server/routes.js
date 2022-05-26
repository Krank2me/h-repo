const buildings = require("./api/buildings");
const user = require("./api/user");

function routes(app) {
  app.use("/api/v1/buildings", buildings);
  app.use("/api/v1/user", user);
}

module.exports = routes;
