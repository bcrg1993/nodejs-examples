import { Logger } from "tslog";
import { StudentUseCase } from "../port/in/student.usecase";
import { StudentModel } from "../../../../model/student.model";
import { StudentPort } from "../port/out/student.port";
import { StudentApiAdapter } from "../../../../adapter/out/mysql/student.adapter";

export class StudentInteractor implements StudentUseCase {

	private _studentPort: StudentPort;

	constructor() { 
		this._studentPort = new StudentApiAdapter();
	}

	async findAll(): Promise<StudentModel[]> {
		let log: Logger = new Logger();
		let studentList: StudentModel[];

		await this._studentPort.findAll()
			.then(result => { 
				studentList = result;
				log.info("Finished StudentInteractor.findAll successfully");
			}).catch(err => log.error("Unexpected error on StudentInteractor.findAll: ", err));
		
		return studentList;
	}

	async save(studentModel: StudentModel): Promise<StudentModel> {
		let log: Logger = new Logger();
		let studenModelSaved: StudentModel;

		await this._studentPort.save(studentModel)
			.then(result => {
				studenModelSaved = result;
				log.info("Finished StudentInteractor.save successfully");
			}).catch(err => log.error("Unexpected error on StudentInteractor.save: ", err));
		
		return studenModelSaved;
	} 

}