const express = require("express");
const { json } = require("body-parser");

const server = express();
const { setRoutes } = require("./routes");

const cors = require("cors");
// Allow Origins according to your need.
const corsOptions = {
  origin: "*",
};

server.use(cors(corsOptions));

server.use(json());

// Setting up Routes
setRoutes(server);

module.exports = { server };
