package com.examly.springapp.controller;
import com.examly.springapp.exception.StudentNotFoundException;
import com.examly.springapp.model.StudentModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;



import org.springframework.http.ResponseEntity;
import java.util.Optional;



@RestController
@CrossOrigin("*")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    //For POSTing the students' data into the database
    @PostMapping("/admin/addStudent")
    public ResponseEntity<StudentModel> saveUser(@RequestBody StudentModel studentModel) {
        return new ResponseEntity<>(studentRepository.save(studentModel), HttpStatus.CREATED);
    }

    //Code to GET all the students' data from the database
    @GetMapping("/admin/viewStudent")
    public ResponseEntity<List<StudentModel>> getUser() {
        return new ResponseEntity<>(studentRepository.findAll(), HttpStatus.OK);
    }

    //to GET the Student with the specific user id and handling Student Not Found Exception
    @GetMapping("/admin/viewStudent/{StudentId}")
    StudentModel getUserById(@PathVariable(name="StudentId") Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException(id));
    }

    //For Editing the Student's data
    @PutMapping("/admin/editStudent/{StudentId}")
    StudentModel updateUser(@RequestBody StudentModel newStudentModel, @PathVariable(name="StudentId") Long id) {
        return studentRepository.findById(id)
                .map(studentModel -> {
                    studentModel.setFirstName(newStudentModel.getFirstName());          //setting the Students' details accordingly passed by the client
                    studentModel.setLastName(newStudentModel.getLastName());
                    studentModel.setGender(newStudentModel.getGender());
                    studentModel.setFatherName(newStudentModel.getFatherName());
                    studentModel.setPhnNo1(newStudentModel.getPhnNo1());
                    studentModel.setPhnNo2(newStudentModel.getPhnNo2());
                    studentModel.setMotherName(newStudentModel.getMotherName());
                    studentModel.setEmail(newStudentModel.getEmail());
                    studentModel.setAge(newStudentModel.getAge());
                    studentModel.setHouseNo(newStudentModel.getHouseNo());
                    studentModel.setStreetName(newStudentModel.getStreetName());
                    studentModel.setAreaName(newStudentModel.getAreaName());
                    studentModel.setPinCode(newStudentModel.getPinCode());
                    studentModel.setState(newStudentModel.getState());
                    studentModel.setNationality(newStudentModel.getNationality());
                    return studentRepository.save(studentModel);               //Save the existing StudentModel data into the database
                }).orElseThrow(() -> new StudentNotFoundException(id));
    }
    //For deleting the user data using Student ID
    @DeleteMapping("/admin/deleteStudent/{StudentId}")
    String deleteUser(@PathVariable(name="StudentId") Long id){
        if(!studentRepository.existsById(id)){             //If the StudentModel ID does not exist
            throw new StudentNotFoundException(id);
        }
        studentRepository.deleteById(id);                   //If the StudentModel with a specific ID is present
        return  "Student with id "+id+" has been deleted: success.";
    }




     //test

     @GetMapping("/admin/student") 
     public ResponseEntity<?> getAllStudents(){
         List<?> allStu = studentRepository.findAll();
         return ResponseEntity.ok(allStu);
}
 
}

