const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const configExpress = require("./config/express");
const connectDB = require("./config/database");

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: envFile });

const app = express();
const server = http.Server(app);

const env = process.env.NODE_ENV;

if (env !== "test") {
  connectDB();
}

//routes
const routes = require("./routes");
routes(app);

configExpress(app);

module.exports = { app, server };
