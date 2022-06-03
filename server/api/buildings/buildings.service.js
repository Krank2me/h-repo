const Buildings = require("./buildings.model");

async function getAllBuildings() {
  const buildings = await Buildings.find();
  return buildings;
}

function findBuildingByQuery(search) {
  const query = {
    $or: [
      { name: { $regex: search, $options: "i" } },
      { address: { $regex: search, $options: "i" } },
      { city: { $regex: search, $options: "i" } },
      { state: { $regex: search, $options: "i" } },
      { postal: { $regex: search, $options: "i" } },
    ],
  };

  return Buildings.find(query);
}

module.exports = { getAllBuildings, findBuildingByQuery };
