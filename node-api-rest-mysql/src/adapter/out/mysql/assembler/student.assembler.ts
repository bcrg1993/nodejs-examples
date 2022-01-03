import { StudentModel } from "../../../../model/student.model";
import { StudentEntity } from "../entity/student.entity";

export class StudentAssembler {
  
  public to(studentModel: StudentModel): StudentEntity { 
    let studentEntity: StudentEntity = new StudentEntity();

    console.log(JSON.stringify(studentModel));

    studentEntity.documentNumber = studentModel.documentNumber;
    studentEntity.name = studentModel.name;
    studentEntity.lastName = studentModel.lastName;
    studentEntity.dateOfBirth = studentModel.dateOfBirth;

    return studentEntity;
  }

  public from(studentEntity: StudentEntity): StudentModel { 
    let studentModel: StudentModel = new StudentModel();

    studentModel.uuid = studentEntity.uuid;
    studentModel.documentNumber = studentEntity.documentNumber;
    studentModel.name = studentEntity.name;
    studentModel.lastName = studentEntity.lastName;
    studentModel.dateOfBirth = studentEntity.dateOfBirth;

    return studentModel;
  }
}