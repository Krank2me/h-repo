const { Router } = require("express");
const handlerCreateUser = require("./user.controller");

const router = Router();

router.post("/", handlerCreateUser);

module.exports = router;
