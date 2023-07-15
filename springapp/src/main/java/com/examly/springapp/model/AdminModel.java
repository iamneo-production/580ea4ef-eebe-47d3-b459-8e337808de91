package com.examly.springapp.model;

public class AdminModel {
    private String email;
	private String password;
	private String mobileNumber;
	private String userRole;

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

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
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
    } 
    */
}
 