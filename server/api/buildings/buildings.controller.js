const getAllBuildings = require("./buildings.service");

async function handlerGetAllBuildings(req, res) {
  try {
    const buildings = await getAllBuildings();
    res.status(201).json(buildings);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = handlerGetAllBuildings;
