package com.examly.springapp.controller;
import com.examly.springapp.exception.UserNotFoundException;


import com.examly.springapp.model.CourseModel;
import com.examly.springapp.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


// test

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;


@RestController
@CrossOrigin("*")

public class CourseController {
    @Autowired
    private CourseRepository userRepository;
    @PostMapping("/user")
    CourseModel addCourse (@RequestBody CourseModel newCourseModel){
        return userRepository.save(newCourseModel);
    }
    @GetMapping("/users")
    List<CourseModel> viewCourse(){
        return userRepository.findAll();
    }


    @GetMapping("/user/{courseId}")
    CourseModel editCourse(@PathVariable Long courseId){
        return userRepository.findById(courseId)
                .orElseThrow(()->new UserNotFoundException(courseId));
    }
    @PutMapping("/user/{courseId}")
    CourseModel editCourse(@RequestBody CourseModel newCourseModel, @PathVariable Long courseId){
        return userRepository.findById(courseId)
                .map(courseModel -> {
                    courseModel.setCourseName(newCourseModel.getCourseName());
                    courseModel.setCourseDescription(newCourseModel.getCourseDescription());
                    courseModel.setCourseDuration(newCourseModel.getCourseDuration());
                    courseModel.setCourseEnrolled(newCourseModel.getCourseEnrolled());
                    courseModel.setCourseTiming(newCourseModel.getCourseTiming());
                    return userRepository.save(courseModel);

                }).orElseThrow(()->new UserNotFoundException(courseId));
    }
    @DeleteMapping("/user/{courseId}")
    String deleteCourse(@PathVariable Long courseId){
        if(!userRepository.existsById(courseId)){
            throw new UserNotFoundException(courseId);
        }
        userRepository.deleteById(courseId);
        return "user with id "+courseId+"has been deleted success,";
    }



        // test cases 

        @GetMapping("/admin/courses")
        public ResponseEntity<List<CourseModel>> getAllCourses() {
            
                List<CourseModel> allCourses = userRepository.findAll();
                return ResponseEntity.ok(allCourses);
    }
    
}

