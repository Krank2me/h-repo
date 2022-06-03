const { getAllBuildings, findBuildingByQuery } = require("./buildings.service");

async function handlerGetAllBuildings(req, res) {
  try {
    const buildings = await getAllBuildings();
    res.status(200).json(buildings);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetAllBuildingsByQuery(req, res) {
  const query = req.params.query;
  try {
    const buildings = await findBuildingByQuery(query);
    res.status(200).json(buildings);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = { handlerGetAllBuildings, handlerGetAllBuildingsByQuery };
