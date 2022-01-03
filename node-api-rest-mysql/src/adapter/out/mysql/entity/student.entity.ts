import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "student"})
export class StudentEntity { 

    @Column({ name: "uuid"})
    @PrimaryGeneratedColumn("uuid")
    public _uuid: string;
    
    @Column({ name: "documentNumber", type: "varchar", nullable: false, unique: true})
    public _documentNumber: string;
    
    @Column({ name: "name", type: "varchar", nullable: false })
    public _name: string;
    
    @Column({ name: "lastName", type: "varchar", nullable: false })
    public _lastName: string;
    
    @Column({ name: "dateOfBirth", type: "date", nullable: false })
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