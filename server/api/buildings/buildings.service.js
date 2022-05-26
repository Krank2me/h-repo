const Buildings = require("./buildings.model");

async function getAllBuildings() {
  const buildings = await Buildings.find();
  return buildings;
}

module.exports = getAllBuildings;
