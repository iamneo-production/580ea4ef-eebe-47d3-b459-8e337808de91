package com.examly.springapp.model;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;
import javax.persistence.Column;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;



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


    //newly added
    @Column(name = "StudentName")
    private String studentName;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "StudentDOB")
    private Date studentDOB;

    @Column(name = "Address")
    private String address;

    @Column(name = "CompleteAddress")
    private String completeaddress;

    @Column(name = "Mobile")
    private String mobile ;

    @Column(name = "AlternamteNumber")
    private String alternatenumber ;

    //@Column(name = "Malefemale")
    //private String malefemale;

    public StudentModel(long studentId,String firstName,String lastName, String studentName, Date studentDOB, String address, String mobile, String email,String gender , String fatherName,  String motherName ,String alternatenumber,String completeaddress) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.firstName=firstName;
        this.lastName=lastName;
        this.studentDOB = studentDOB;
        this.address = address;
        this.mobile = mobile;
        this.email = email;
        this.gender=gender;
        this.fatherName=fatherName;
        this.motherName=motherName;
        this.alternatenumber=alternatenumber;
        this.completeaddress=completeaddress;

    }
    public StudentModel() {
    }




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

    //newly added

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Date getStudentDOB() {
        return studentDOB;
    }

    public void setStudentDOB(Date studentDOB) {
        this.studentDOB = studentDOB;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getCompleteaddress() {
        return completeaddress;
    }

    public void setCompleteaddress(String completeaddress) {
        this.completeaddress = completeaddress;
    }

    public String getAlternatenumber() {
        return alternatenumber;
    }

    public void setAlternatenumber(String alternatenumber) {
        this.alternatenumber = alternatenumber;
    }

}






