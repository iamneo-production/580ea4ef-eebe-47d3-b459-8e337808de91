package com.examly.springapp.controller;

import java.util.Optional;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.response.LoginResponse;
import com.examly.springapp.response.SignupResponse;
import com.examly.springapp.security.securityconfig.JwtUtils;
import com.examly.springapp.response.JwtResponse;
import com.examly.springapp.services.AuthService;
import com.examly.springapp.response.AuthResponse;

import com.examly.springapp.security.securityservice.UserDetailsImpl;
import com.examly.springapp.security.securityservice.UserDetailsServiceImpl;

import java.util.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RestController
public class AuthController {

	Logger logger = LoggerFactory.getLogger(AuthController.class);

	@Autowired
	UserRepository userRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
    JwtUtils jwtUtils;

	@Autowired
	AuthService authService;

	@PostMapping("/user/login")
	public LoginResponse userlogin(@RequestBody LoginModel data) throws Exception {
		LoginResponse loginResponse = new LoginResponse();
		boolean status = isUserPresent(data);
		loginResponse.setStatus(status);
		if (status) {
			Optional<UserModel> optional = userRepository.findUserByEmail(data.getEmail());
			if (optional.isPresent()) {
				loginResponse.setName(optional.get().getUsername());
				loginResponse.setUserRole(optional.get().getUserRole());
			}
		}
		return loginResponse;
	}

	public boolean isUserPresent(LoginModel data) {
		if (null != data) {
			Optional<UserModel> optional = userRepository.findUserByEmail(data.getEmail());
			if (optional.isPresent() && passwordEncoder.matches(data.getPassword(), optional.get().getPassword())) {
				return true;
			}
		}
		return false;
	}

	@PostMapping("/admin/login")
	public LoginResponse adminlogin(@RequestBody LoginModel data) throws Exception {
		LoginResponse loginResponse = new LoginResponse();
		boolean status = isAdminPresent(data);
		loginResponse.setStatus(status);
		if (status) {
			Optional<UserModel> optional = userRepository.findUserByEmail(data.getEmail());
			if (optional.isPresent()) {
				loginResponse.setName(optional.get().getUsername());
				loginResponse.setUserRole(optional.get().getUserRole());
			}
		}
		return loginResponse;
	}

	public boolean isAdminPresent(LoginModel data) {
		if (null != data) {
			Optional<UserModel> optional = userRepository.findUserByEmail(data.getEmail());
			if (optional.isPresent() && passwordEncoder.matches(data.getPassword(), optional.get().getPassword())) {
				return true;
			}
		}
		return false;
	}

	@PostMapping("/user/signup")
	public SignupResponse signupUser(@RequestBody UserModel user) {
		SignupResponse response = new SignupResponse();
		String message = saveUser(user);
		response.setMessage(message);
		return response;
	}

	public String saveUser(UserModel user) {
		try {
			Optional<UserModel> optional = userRepository.findUserByEmail(user.getEmail());
			if (!optional.isPresent()) {
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				UserModel userModel = userRepository.save(user);
				if (null != userModel) {
					return "Success";
				}
			}
		} catch (Exception e) {
			logger.info("Failed to save User", e);
		}
		return "Failed";
	}

	@PostMapping("/admin/signup")
	public SignupResponse signupAdmin(@RequestBody UserModel user) {
		SignupResponse response = new SignupResponse();
		String message = saveAdmin(user);
		response.setMessage(message);
		return response;
	}

	public String saveAdmin(UserModel user) {
		try {
			Optional<UserModel> optional = userRepository.findUserByEmail(user.getEmail());
			if (!optional.isPresent()) {
				user.setPassword(passwordEncoder.encode(user.getPassword()));
				UserModel userModel = userRepository.save(user);
				if (null != userModel) {
					return "Success";
				}
			}
		} catch (Exception e) {
			logger.info("Failed to save Admin", e);
		}
		return "Failed";
		
	}

	@PostMapping("/signin")
    public ResponseEntity<?> authenticateuser
               (@RequestBody LoginModel loginModel) {

        Authentication authentication = authenticationManager
              .authenticate
                 (new UsernamePasswordAuthenticationToken
                        (loginModel.getEmail(), 
						loginModel.getPassword()));

        SecurityContextHolder.getContext()
               .setAuthentication(authentication);
        String token = jwtUtils.generateJwt(authentication);
		String email = jwtUtils.getUsernameFromToken(token);
		UserModel user = userRepository.findUserByEmail(email).orElse(null);
		String userRole="";
		if(user!=null)
			userRole = user.getUserRole();
		return ResponseEntity.ok(new JwtResponse(token,userRole));

        // UserDetailsImpl userDetails = (UserDetailsImpl) 
        //                       authentication.getPrincipal();

        // return ResponseEntity
        //         .ok(new JwtResponse(jwt, userDetails.getId(),
        //            userDetails.getUsername(), 
        //                     userDetails.getEmail()));
    }

	@PostMapping("/validate")
	public ResponseEntity<?> validateUser(@RequestBody String token) {
		String actualToken = token.substring(7,token.length());
		AuthResponse authResponse = authService.validateTokenAndGetUserRole(actualToken);
		return ResponseEntity.ok(authResponse);
	}




	// @PostMapping("/login")
	// public ResponseEntity<JWTAuthResponse> loginUser(@RequestBody LoginModel loginModel){
	// 	Authentication authentication=authenticationManager.authenticate(
	// 			new UsernamePasswordAuthenticationToken(loginModel.getEmail(), 
	// 					loginModel.getPassword())
	// 			);
	// 	SecurityContextHolder.getContext().setAuthentication(authentication);
		
	// 	String token = JwtUtils.generateJwt(authentication);
		

	// 	return ResponseEntity.ok(new JWTAuthResponse(token));
	// }//
}
