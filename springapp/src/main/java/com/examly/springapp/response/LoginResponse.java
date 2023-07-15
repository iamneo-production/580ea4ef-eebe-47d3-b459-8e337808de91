package com.examly.springapp.response;

public class LoginResponse {
	private Integer id;
	private boolean status;
	private String name;
	private String userRole;
	/* 
    private String token; */

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	/* 
	public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    } 
	*/
}
