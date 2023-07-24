package com.examly.springapp.response;

public class JwtResponse {
	private String token;
	private String tokenType="Bearer";
	private String userRole;
	
	public JwtResponse(String token) {
		this.token=token;
	}

	public JwtResponse(String token, String userRole) {
		this.token=token;
		this.userRole=userRole;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public JwtResponse(String token, String tokenType, String userRole) {
		super();
		this.token = token;
		this.tokenType = tokenType;
		this.userRole = userRole;
	}
	
}
