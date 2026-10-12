import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentService {
    private students = [
        {
            id: 1, 
            name: "Sahil",
            age: 20,   
        },
        {
            id: 2, 
            name: "vijay",
            age: 21,
        },
    ];

    getAllStudent(){
        return this.students;
    }
    getStudentById(id: number){
        const student = this.students.find((s) => s.id === id);
        if(!student) throw new NotFoundException("Student not found");
        return student;
    }

    // POST
    createStudent(data: {name: string; age: number}){
        const newStudent = {
            id: Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return newStudent;
    }

    // PUT
    updateStudent(id: number, data: {name: string; age: number}){
        id = Number(id);
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException("Student not found!");
        this.students[index] = {id, ...data};
        return this.students[index];
    }

    // PATCH
    patchStudent(id: number, data: Partial<{name: string; age: number}>){
        id = Number(id);
        const student = this.getStudentById(id);
        if(!student){
            throw new NotFoundException("Student not found");
        }
        Object.assign(student, data);
        return student;

    }

    // DELETE
    deleteStudent(id: number){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1) throw new NotFoundException("Student not found!");
        const deleted = this.students.splice(index, 1);
        return {message: "student deleted", student: deleted[0]};
    }
}
