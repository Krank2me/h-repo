const { Router } = require("express");
const handlerGetAllBuildings = require("./buildings.controller");

const router = Router();

router.get("/", handlerGetAllBuildings);

module.exports = router;
