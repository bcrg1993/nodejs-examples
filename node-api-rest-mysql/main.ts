import cors = require("cors");
import express = require("express");
import bodyParser = require("body-parser");

import { Application } from "express";
import { StudentRoute } from "./route/student.route";

// Express application configuration
const MainApplication: Application = express();
MainApplication.set("APPLICATION_PORT", process.env.APPLICATION_PORT);

// Middleware configuration
const corsConfig = {
    origin: process.env.APPLICATION_DOMAIN,
    optionsSuccessStatus: 200
};
MainApplication.use(cors(corsConfig));
MainApplication.use(bodyParser.json());
MainApplication.use(bodyParser.urlencoded({ extended: true }));

// API Routes configuration
MainApplication.use("/student", new StudentRoute().routerPath);

export default MainApplication;
