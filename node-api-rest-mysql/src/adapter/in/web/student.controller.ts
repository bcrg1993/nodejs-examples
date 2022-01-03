import { Logger } from "tslog";
import { Request, Response } from "express";
import { StudentInteractor } from "../../../domain/out/port/interactor/student.interactor";
import { StudentUseCase } from "../../../domain/out/port/port/in/student.usecase";
import { StudentModel } from "../../../model/student.model";

export class StudentController { 

  private _studentUseCase: StudentUseCase;

  constructor() { 
    this._studentUseCase = new StudentInteractor();
  }

  findAll(request: Request, response: Response): any { 
    let log: Logger = new Logger();

    this._studentUseCase.findAll()
      .then(result => {
        response.json(result);
        log.info("Finished StudentController.findAll successfully");
      }).catch(err => log.error("Unexpected error on StudentController.findAll", err));
  }

  save(request: Request, response: Response): any {
    let log: Logger = new Logger();
    let studentModelToSave: StudentModel = request.body;

    this._studentUseCase.save(studentModelToSave)
      .then(result => {
        response.json(result);
        log.info("Finished StudentController.save successfully");
      }).catch(err => log.error("Unexpected error on StudentController.save", err));
  }
}