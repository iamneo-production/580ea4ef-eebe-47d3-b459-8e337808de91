package com.examly.springapp.response;

public class AuthResponse {
    private boolean valid;
    private String userRole;

    public AuthResponse(boolean valid, String userRole) {
        this.valid = valid;
        this.userRole = userRole;
    }
    
    // Getters and setters
    
    public boolean isValid() {
        return valid;
    }

    public void setValid(boolean valid) {
        this.valid = valid;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }  
}