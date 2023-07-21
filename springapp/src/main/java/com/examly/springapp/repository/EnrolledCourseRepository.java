package com.examly.springapp.repository;

import com.examly.springapp.model.CourseModel;
import com.examly.springapp.model.EnrolledCourse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnrolledCourseRepository extends JpaRepository<EnrolledCourse , Long> {
    //List<EnrolledCourse> findByUserId(String studentId);
}
