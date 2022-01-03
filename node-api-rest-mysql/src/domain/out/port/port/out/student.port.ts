import { StudentModel } from "../../../../../model/student.model";

export interface StudentPort { 

    findAll(): Promise<StudentModel[]>;

    save(studentModel: StudentModel): Promise<StudentModel>;
}