import { createConnection } from "typeorm";
import { Logger } from "tslog";

import express = require("express");
import dotenv = require("dotenv");
let log: Logger = new Logger();

// Dotenv configuration
dotenv.config({ path: "./environment/develop.env" });

// Database Configuration
createConnection()
  .then(async (connection) => log.info("Connected successfully to MySQL"))
  .catch((err) => log.error("Unexpected error connecting to MySQL: ", err));

// Loading MainApplication Module
import MainApplication from "./main";

MainApplication.listen(MainApplication.get("APPLICATION_PORT"), () => { 
  log.info("Application running on port", MainApplication.get("APPLICATION_PORT"));
});
