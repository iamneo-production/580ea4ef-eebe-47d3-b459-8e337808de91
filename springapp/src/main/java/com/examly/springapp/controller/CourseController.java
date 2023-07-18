package com.examly.springapp.controller;
import com.examly.springapp.exception.UserNotFoundException;


import com.examly.springapp.model.CourseModel;
import com.examly.springapp.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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


    @GetMapping("/user/{id}")
    CourseModel editCourse(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }
    @PutMapping("/user/{id}")
    CourseModel editCourse(@RequestBody CourseModel newCourseModel, @PathVariable Long id){
        return userRepository.findById(id)
                .map(courseModel -> {
                    courseModel.setCourseName(newCourseModel.getCourseName());
                    courseModel.setDescription(newCourseModel.getDescription());
                    courseModel.setDuration(newCourseModel.getDuration());
                    courseModel.setNoStudents(newCourseModel.getNoStudents());
                    courseModel.setCourseTiming(newCourseModel.getCourseTiming());
                    return userRepository.save(courseModel);

                }).orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/user/{id}")
    String deleteCourse(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "user with id "+id+"has been deleted success,";
    }

}

