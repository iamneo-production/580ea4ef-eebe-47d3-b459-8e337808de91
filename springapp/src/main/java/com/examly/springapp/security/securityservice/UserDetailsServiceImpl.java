package com.examly.springapp.security.securityservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Optional;


import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.security.securityservice.UserDetailsImpl;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<UserModel> userOptional = userRepository.findUserByEmail(email);
        UserModel user = userOptional.orElseThrow(() -> new UsernameNotFoundException("User doesn't exist with email: " + email));
        return UserDetailsImpl.build(user);
    }
}