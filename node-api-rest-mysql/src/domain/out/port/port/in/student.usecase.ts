import { StudentModel } from "../../../../../model/student.model";

export interface StudentUseCase {

  findAll(): Promise<StudentModel[]>;

  save(studentModel: StudentModel): Promise<StudentModel>;
}