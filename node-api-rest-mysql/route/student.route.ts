import express = require("express");
import { StudentController } from "../src/adapter/in/web/student.controller";

export class StudentRoute { 

  private _studentController: StudentController;
  private _studentRouter: express.Router;

  constructor() { 
    this._studentController = new StudentController();
    this._studentRouter = express.Router();
  }

  public get routerPath(): express.Router { 
    this._studentRouter.get("/", (request, response) => this._studentController.findAll(request, response));
    this._studentRouter.post("/", (request, response) => this._studentController.save(request, response));
    
    return this._studentRouter;
  }
}