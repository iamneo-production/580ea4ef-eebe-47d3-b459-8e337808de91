package com.examly.springapp.model;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;
import javax.persistence.Column;



@Entity
@Table(name = "Student_Model")

public class StudentModel{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentId;

    @Column (name = "firstName")
    private String firstName;
    @Column (name = "lastName")

    private String lastName;
    @Column (name = "gender")
    private String gender;
    @Column (name = "fatherName")
    private String fatherName;
    @Column (name = "phnNo1")
    private Long  phnNo1;
    @Column (name = "phnNo2")
    private Long phnNo2;
    @Column (name = "motherName")
    private String motherName;
    @Column (name = "email")
    private String email;

    @Column (name = "age")
    private int age;
    @Column(name = "houseNo")
    private String houseNo;
    @Column(name = "streetName")
    private String streetName;
    @Column(name = "areaName")
    private String areaName;
    @Column(name = "pinCode")
    private Long pinCode;
    @Column(name = "state")
    private String state;
    @Column(name = "nationality")
    private String nationality;

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public Long getPhnNo1() {
        return phnNo1;
    }

    public void setPhnNo1(Long phnNo1) {
        this.phnNo1 = phnNo1;
    }

    public Long getPhnNo2() {
        return phnNo2;
    }

    public void setPhnNo2(Long phnNo2) {
        this.phnNo2 = phnNo2;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getHouseNo() {
        return houseNo;
    }

    public void setHouseNo(String houseNo) {
        this.houseNo = houseNo;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public Long getPinCode() {
        return pinCode;
    }

    public void setPinCode(Long pinCode) {
        this.pinCode = pinCode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
}






