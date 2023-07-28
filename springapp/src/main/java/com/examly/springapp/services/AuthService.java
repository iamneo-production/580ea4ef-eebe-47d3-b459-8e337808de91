package com.examly.springapp.services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.response.AuthResponse;
import com.examly.springapp.security.securityconfig.JwtUtils;

@Service
public class AuthService {

    @Value("${jwt.secret}")
    private String secret;

    @Autowired
	UserRepository userRepository;

    @Autowired
    JwtUtils jwtUtils;

    private UserModel findUserByEmail(String email) {
        return userRepository.findUserByEmail(email).orElse(null);
    }

    public AuthResponse validateTokenAndGetUserRole(String token) {
        try {
            boolean validToken = jwtUtils.validateJwt(token);

            if (validToken) {
                String userEmail = jwtUtils.getUsernameFromToken(token);

                // Load the user from the database based on the email extracted from the token
                UserModel user = findUserByEmail(userEmail);

                if (user != null) {
                    return new AuthResponse(true, user.getUserRole());
                }
            }
        } catch (Exception e) {
            return new AuthResponse(false, null);
        }
        return new AuthResponse(false, null);
    }
}