export class StudentModel {

    public _uuid: string;
    public _documentNumber: string;
    public _name: string;
    public _lastName: string;
    public _dateOfBirth: Date;

    constructor() { 
        
    }

    public get uuid() {
        return this._uuid;
    }

    public set uuid(uuid: string) {
        this._uuid = uuid;
    }

    public get documentNumber() { 
        return this._documentNumber;
    }
    
    public set documentNumber(documentNumber: string) { 
        this._documentNumber = documentNumber;
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) { 
        this._name = name;
    }

    public get lastName() { 
        return this._lastName;
    }

    public set lastName(lastName: string) { 
        this._lastName = lastName;
    }

    public get dateOfBirth() {
        return this._dateOfBirth;
    }

    public set dateOfBirth(dateOfBirth: Date) { 
        this._dateOfBirth = dateOfBirth;
    }
}