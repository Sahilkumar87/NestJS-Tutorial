import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './student.schema.js';
@Injectable()
export class StudentService {

    constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>){
        
    }

    async createStudent(data: Partial<Student>): Promise<Student>{
        const newStudent = new this.studentModel(data);
        return newStudent.save();

    }

     async getAllStudent(): Promise<Student[]> {
        return this.studentModel.find().exec();
    }


    async getStudentById(id: string): Promise<Student | null>{
        return this.studentModel.findById(id).exec();
    }

    
}
