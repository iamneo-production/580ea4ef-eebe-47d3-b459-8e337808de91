package com.examly.springapp.model;

import  javax.persistence.*;

import javax.persistence.Column;


@Entity
@Table(name = "Feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long feedbackid;

    @Column(name = "Name")
    private String name;

    @Column(name = "Email")
    private String email;

    @Column(name = "Question1")
    private String question1;

    @Column(name = "Question2")
    private String question2;

    @Column(name = "Question3")
    private String question3;

    @Column(name = "Question4")
    private String question4;

    @Column(name = "Feedback")
    private String feedback;

    public Feedback(long feedbackid, String name, String email, String question1, String question2, String question3, String question4, String feedback) {
        this.feedbackid = feedbackid;
        this.name = name;
        this.email = email;
        this.question1 = question1;
        this.question2 = question2;
        this.question3 = question3;
        this.question4 = question4;
        this.feedback = feedback;
    }

    public Feedback() {
    }

    public long getFeedbackid() {
        return feedbackid;
    }

    public void setFeedbackid(long feedbackid) {
        this.feedbackid = feedbackid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getQuestion1() {
        return question1;
    }

    public void setQuestion1(String question1) {
        this.question1 = question1;
    }

    public String getQuestion2() {
        return question2;
    }

    public void setQuestion2(String question2) {
        this.question2 = question2;
    }

    public String getQuestion3() {
        return question3;
    }

    public void setQuestion3(String question3) {
        this.question3 = question3;
    }

    public String getQuestion4() {
        return question4;
    }

    public void setQuestion4(String question4) {
        this.question4 = question4;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
}

