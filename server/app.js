const express = require("express");
const http = require("http");
const configExpress = require("./config/express");
const routes = require("./routes");
const connectDB = require("./config/database");

const app = express();
const server = http.Server(app);

configExpress(app);
connectDB();

routes(app);

module.exports = { app, server };
