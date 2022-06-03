const { Router } = require("express");
const {
  handlerGetAllBuildings,
  handlerGetAllBuildingsByQuery,
} = require("./buildings.controller");

const router = Router();

router.get("/", handlerGetAllBuildings);
router.get("/:query", handlerGetAllBuildingsByQuery);

module.exports = router;
