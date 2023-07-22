package com.examly.springapp.controller;
import com.examly.springapp.exception.StudentNotFoundException;
import com.examly.springapp.model.StudentModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


@RestController
@CrossOrigin("*")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    //For POSTing the students' data into the database
    @PostMapping("/student")
    public ResponseEntity<StudentModel> saveStudent(@RequestBody StudentModel student) {
        return new ResponseEntity<>(studentRepository.save(student), HttpStatus.CREATED);
    }

    //Code to GET all the students' data from the database
    @GetMapping("/students")
    public ResponseEntity<List<StudentModel>> getStudent() {
        return new ResponseEntity<>(studentRepository.findAll(), HttpStatus.OK);
    }

    //to GET the Student with the specific student id and handling Student Not Found Exception
    @GetMapping("/student/{id}")
    StudentModel getStudentById(@PathVariable Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException(id));
    }

    //For Editing the Student's data
    @PutMapping("/student/{id}")
    StudentModel updateStudent(@RequestBody StudentModel newStudent, @PathVariable Long id) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setFirstName(newStudent.getFirstName());          //setting the Students' details accordingly passed by the client
                    student.setLastName(newStudent.getLastName());
                    student.setGender(newStudent.getGender());
                    student.setFatherName(newStudent.getFatherName());
                    student.setPhnNo1(newStudent.getPhnNo1());
                    student.setPhnNo2(newStudent.getPhnNo2());
                    student.setMotherName(newStudent.getMotherName());
                    student.setEmail(newStudent.getEmail());
                    student.setAge(newStudent.getAge());
                    student.setHouseNo(newStudent.getHouseNo());
                    student.setStreetName(newStudent.getStreetName());
                    student.setAreaName(newStudent.getAreaName());
                    student.setPinCode(newStudent.getPinCode());
                    student.setState(newStudent.getState());
                    student.setNationality(newStudent.getNationality());
                    return studentRepository.save(student);               //Save the existing Student data into the database
                }).orElseThrow(() -> new StudentNotFoundException(id));
    }
    //For deleting the student data using Student ID
    @DeleteMapping("/student/{id}")
    String deleteStudent(@PathVariable Long id){
        if(!studentRepository.existsById(id)){             //If the Student ID does not exist
            throw new StudentNotFoundException(id);
        }
        studentRepository.deleteById(id);                   //If the Student with a specific ID is present
        return  "Student with id "+id+" has been deleted: success.";
    }
}

