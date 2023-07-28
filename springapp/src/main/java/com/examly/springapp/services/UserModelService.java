package com.examly.springapp.services;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.AdminRepository;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.security.securityconfig.JwtUtils;
import com.examly.springapp.security.securityservice.UserDetailsImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

@Service
public class UserModelService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    private static final String USER_NAME_NOT_FOUND = "User email not found in the database";

    public boolean isUserPresent(LoginModel data) {
        UserModel userExist = userRepository.findUserByEmail(data.getEmail()).get();
        return userExist != null && "user".equals(userExist.getUserRole());
    }

    public boolean isAdminPresent(LoginModel data) {
        UserModel userExist = userRepository.findUserByEmail(data.getEmail()).get();

        return userExist != null && "admin".equals(userExist.getUserRole());

    }
    public boolean userAlreadyExist(String email) {
        return userRepository.findUserByEmail(email) != null;
    }

    public ResponseEntity<?> saveUser(UserModel userModel) {
        if (userAlreadyExist(userModel.getEmail())) {
            return new ResponseEntity<>("User already exists in the database. Please log in.", HttpStatus.CONFLICT);
        }

        userModel.setPassword(passwordEncoder.encode(userModel.getPassword()));
        userRepository.save(userModel);
        return new ResponseEntity<>(userModel.getUserRole() + " added", HttpStatus.ACCEPTED);
    }

    public UserModel saveAdmin(AdminModel adminModel) {
        UserModel admin = new UserModel();
        admin.setEmail(adminModel.getEmail());
        admin.setPassword(adminModel.getPassword());
        admin.setMobileNumber(adminModel.getMobileNumber());
        admin.setUserRole(adminModel.getUserRole());
        admin.setUsername("admin");
        adminRepository.save(adminModel);
        return userRepository.save(admin);
    }
	public ResponseEntity<?> validateUser(LoginModel data) {
        Optional<UserModel> optionalUser = userRepository.findUserByEmail(data.getEmail());
        if (optionalUser.isPresent()) {
            UserModel user = optionalUser.get();
         // Perform necessary validations or operations with the user object
            return ResponseEntity.ok("User found: " + user.getUsername());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    public UserModel findUserByEmail(String email) {
        Optional<UserModel> optionalUser = userRepository.findUserByEmail(email);
        return optionalUser.orElse(null);
    }
    
   /*  public ResponseEntity<?> validateUser(LoginModel data) {
        Optional<UserModel> optionalUser = userRepository.findByEmail(data.getEmail());
        if (optionalUser.isPresent()) {
            UserModel user = optionalUser.get();
            // Perform necessary validations or operations with the user object
            return ResponseEntity.ok("User found: " + user.getUsername());
        } else {
            return ResponseEntity.notFound().build();
        }
    }*/
    public ResponseEntity<?> authenticateUser(LoginModel data) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(data.getEmail(), data.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String jwt = jwtUtils.generateJwt(authentication);

        HashMap<String, Object> outResponse = new HashMap<>();
        outResponse.put("token", jwt);
        outResponse.put("id", userDetails.getId());
        outResponse.put("username", userDetails.getUsername());
        outResponse.put("email", userDetails.getEmail());
        outResponse.put("roles", userDetails.getAuthorities());
        outResponse.put("status", 200);

        return ResponseEntity.ok(outResponse);
    }

    /*public Optional<UserModel> findUserByEmail(String email) {

        return userRepository.findUserByEmail(email);
    }*/
}