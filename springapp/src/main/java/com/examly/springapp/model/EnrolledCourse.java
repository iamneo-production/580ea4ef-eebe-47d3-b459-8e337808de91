
package com.examly.springapp.model;


import javax.persistence.*;

import javax.persistence.Column;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Calendar;
import java.util.Date;

@Entity
@Table(name = "Admission")
public class EnrolledCourse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long admissionid;

    @Column(name = "CourseName")
    private String courseName;
    @Column(name = "CourseDuration")
    private String courseDuration;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "JoinedDate")
    private Date joinedDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "EndDate")
    private Date endDate;
    @Column(name = "RemainingDays")
    private String remainingDays;



    public EnrolledCourse(long admissionid, String courseName, Date joinedDate, Date endDate , String courseDuration,String remainingDays) {
        this.admissionid = admissionid;
        this.courseName = courseName;
        this.courseDuration=courseDuration;
        this.joinedDate = joinedDate;
        this.endDate = endDate;
        this.remainingDays=remainingDays;
    }

    public EnrolledCourse() {

    }

    public long getAdmissionid() {
        return admissionid;
    }

    public void setAdmissionid(long admissionid) {
        this.admissionid = admissionid;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Date getJoinedDate() {
        return joinedDate;
    }

    public void setJoinedDate(Date joinedDate) {
        this.joinedDate = joinedDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getCourseDuration() {
        return courseDuration;
    }

    public void setCourseDuration(String courseDuration) {
        this.courseDuration = courseDuration;
    }

    public String getRemainingDays() {
        return remainingDays;
    }

    public void setRemainingDays(String remainingDays) {
        this.remainingDays = remainingDays;
    }
}
