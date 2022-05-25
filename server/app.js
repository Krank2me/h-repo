const express = require("express");
const cors = require("cors");
const app = express();

//settings
app.set("port", process.env.PORT || 4001);

//middleware
app.use(cors());
app.use(express.json());

module.exports = app;
