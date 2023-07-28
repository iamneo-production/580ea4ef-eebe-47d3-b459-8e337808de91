package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CourseModel {
    @Id
    @GeneratedValue
    private Long courseId;
    private String courseName;
    private String courseDescription;
    private String courseDuration;
    private String courseTiming;
    private Long courseEnrolled;

    // Getters and setters for all fields

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public String getCourseDuration() {
        return courseDuration;
    }

    public void setCourseDuration(String courseDuration) {
        this.courseDuration = courseDuration;
    }

    public String getCourseTiming() {
        return courseTiming;
    }

    public void setCourseTiming(String courseTiming) {
        this.courseTiming = courseTiming;
    }

    public Long getCourseEnrolled() {
        return courseEnrolled;
    }

    public void setCourseEnrolled(Long courseEnrolled) {
        this.courseEnrolled = courseEnrolled;
    }
}

