package com.examly.springapp.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LoginModel {
	@Id
	private String email;
	private String password;

	 /* 
    private String token;
    private Long expirationTime;*/
     

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	/* 
    public String getToken(){
        return token;
    }
    public void setToken(String token){
        this.token = token;
    }
    public Long getExpirationTime(){
        return expirationTime;
    }
    public void setExpirationTime(Long expirationTime){
        this.expirationTime = expirationTime;
    } */



}