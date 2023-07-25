package com.examly.springapp.controller;

import com.examly.springapp.model.*;
import com.examly.springapp.repository.*;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    CourseRepository CourseRepository;
    @Autowired
    InstituteModelRepository instituteRepository;

    @Autowired
    EnrolledCourseRepository enrolledCourseRepository;

    @Autowired
    FeedbackRepository feedbackRepository;

    @PostMapping("/user/addAdmission")
    public ResponseEntity<StudentModel> saveStudent(@RequestBody StudentModel student)
    {
        return new  ResponseEntity<> (studentRepository.save(student), HttpStatus.CREATED);
    }
    

    @PostMapping("/user/addAdmissions")
    public ResponseEntity<EnrolledCourse> saveEnrolledCourse(@RequestBody EnrolledCourse enrolledCourse)
    {
        return new  ResponseEntity<> (enrolledCourseRepository.save(enrolledCourse), HttpStatus.CREATED);
    }

    @PostMapping("/user/addreviews")
    public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback feedback)
    {
        return new  ResponseEntity<> (feedbackRepository.save(feedback), HttpStatus.CREATED);
    }
    /*@PostMapping("/user/getuserid")
    public ResponseEntity<StudentModel>  getuserid(@RequestBody String email)
    {
        return new ResponseEntity<> (studentRepository.findByEmail(email),HttpStatus.OK);
    }*/
   

   /* @GetMapping("/user/viewAdmission")
    public ResponseEntity<List<EnrolledCourse>> getEnrolledCourses(@RequestHeader("student-id") String studentId) {
        // Use the user ID to filter enrolled courses specific to that user
        List<EnrolledCourse> enrolledCourses = enrolledCourseRepository.findByUserId(studentId);

        return new ResponseEntity<>(enrolledCourses, HttpStatus.OK);
    }*/


    @GetMapping("/user/viewAdmission")
    public ResponseEntity<List<EnrolledCourse>> getEnrolledCourses(){
        return new ResponseEntity<>(enrolledCourseRepository.findAll(),HttpStatus.OK);
    }

    @GetMapping("/user/viewAdmissions")
    public ResponseEntity<List<StudentModel>> getStudent1(){

        //List<StudentModel> studentsForUser = studentRepository.findByEmail(UserEmail);
        //return new ResponseEntity<>(studentsForUser, HttpStatus.OK);
        return new ResponseEntity<>(studentRepository.findAll(),HttpStatus.OK);
    }
    


    @GetMapping("/user/viewStatus")
    public ResponseEntity<List<EnrolledCourse>> getEnrolledCourse(){
        return new ResponseEntity<>(enrolledCourseRepository.findAll(),HttpStatus.OK);
    }

    @GetMapping("/user/viewAdmissions/{studentId}")
    public ResponseEntity <StudentModel> getStudents(@PathVariable long studentId){
        Optional <StudentModel> student = studentRepository.findById(studentId);
        if(student.isPresent()){
            return new ResponseEntity<>(student.get(),HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/user/editAdmission/{studentId}")
    public ResponseEntity<StudentModel> updateStudent(@PathVariable  long studentId ,@RequestBody StudentModel stud){
       //long studentId = enrolled;

        Optional <StudentModel> student =studentRepository.findById(studentId);
        if(student.isPresent()) {
            student.get().setStudentName(stud.getStudentName());
            student.get().setStudentDOB(stud.getStudentDOB());
            student.get().setAddress(stud.getAddress());
            student.get(). setMobile(stud.getMobile());
            student.get(). setEmail(stud.getEmail());
            student.get(). setGender(stud. getGender());
            student.get(). setFatherName(stud.getFatherName());
            student.get(). setMotherName(stud.getMotherName());
            student.get().setAlternatenumber(stud.getAlternatenumber());
            student.get().setCompleteaddress(stud.getCompleteaddress());


            return new ResponseEntity<>(studentRepository.save(student.get()), HttpStatus.OK);
        }
        else{
            return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    

    @DeleteMapping("/user/deleteAdmission/{enrolled}")
    public ResponseEntity<Void> deleteAdmission(@PathVariable("enrolled") long enrolled ){
        long admissionid = enrolled;
        Optional <EnrolledCourse> enrolledCourse =enrolledCourseRepository.findById(admissionid);
        if(enrolledCourse.isPresent()) {
            enrolledCourseRepository.deleteById(admissionid);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else{
            return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}


    /*@GetMapping("/user/viewAdmission")
    public ResponseEntity<List<Course>> getEnrolledCourses() {
        List<Course> enrolledCourses = courseRepository.findAll();
        return new ResponseEntity<>(enrolledCourses, HttpStatus.OK);
    }*/

    /*@GetMapping("/user/viewAdmission/course")
    public ResponseEntity<Course> getEnrolledCourse(@RequestParam String courseName) {
        Optional<Course> course = courseRepository.findByCourseName(courseName);
        if (course.isPresent()) {
            return new ResponseEntity<>(course.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }*/




//
