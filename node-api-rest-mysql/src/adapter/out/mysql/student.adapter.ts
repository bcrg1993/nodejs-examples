
import { getRepository } from "typeorm";
import { Logger } from "tslog";
import { StudentPort } from "../../../domain/out/port/port/out/student.port";
import { StudentModel } from "../../../model/student.model";
import { StudentAssembler } from "./assembler/student.assembler";
import { StudentEntity } from "./entity/student.entity";

export class StudentApiAdapter implements StudentPort {

  private _studentAssembler: StudentAssembler;

  constructor() { 
    this._studentAssembler = new StudentAssembler();
  }

  async findAll(): Promise<StudentModel[]> {
    let log: Logger = new Logger();
    let studentList: StudentEntity[];
    
    await getRepository(StudentEntity)
      .find()
      .then(result => { 
        studentList = result;
        log.info("Finished StudentApiAdapter.findAll successfully");
      })
      .catch(err => log.error("Unexpected error on StudentApiAdapter.findAll: ", err));
    
    return studentList.map(studentEntity => this._studentAssembler.from(studentEntity));
  }

  async save(studentModelToSave: StudentModel): Promise<StudentModel> {
    let log: Logger = new Logger();
    let studentModelSaved: StudentModel;
    let studentEntity: StudentEntity = this._studentAssembler.to(studentModelToSave);

    await getRepository(StudentEntity)
      .save(studentEntity)
      .then(result => {
        studentModelSaved = this._studentAssembler.to(result);
        log.info("Finished StudentApiAdapter.save successfully");
      })
      .catch(err => log.error("Unexpected error on StudentApiAdapter.save: ", err));
    
    return studentModelSaved;
  }

}