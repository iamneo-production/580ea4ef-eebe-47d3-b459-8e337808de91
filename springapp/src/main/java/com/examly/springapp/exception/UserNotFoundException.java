package com.examly.springapp.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long courseId){
        super("Could not found the user with id"+courseId);
    }
}

