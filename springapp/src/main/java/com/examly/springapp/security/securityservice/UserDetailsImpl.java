package com.examly.springapp.security.securityservice;

import java.util.Collection;
import java.util.Collections;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.examly.springapp.model.*;
import com.examly.springapp.model.UserModel;
import java.util.List;


public class UserDetailsImpl implements UserDetails {
    private Integer id;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    public UserDetailsImpl(String email, String password,
            Collection<? extends GrantedAuthority> authorities,Integer id) {
        super();
        
        this.email = email;
        this.password = password;
        this.authorities = authorities;
        this.id = id;
    }
    public static UserDetailsImpl build(UserModel user){
        GrantedAuthority authority=new SimpleGrantedAuthority("ROLE_"+user.getUserRole());
        return new UserDetailsImpl(
            user.getEmail(),
            user.getPassword(),
            List.of(authority),
            user.getId().intValue()

            //Collections.singleton(authority)
        );
    }
    
    public Integer getId() {
        return id;
    }
    @Override
    public String getUsername() {
        return email;
    }
    @Override
    public String getPassword() {
        return password;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }
    @Override
    public boolean isEnabled(){
        return true;
    }
    @Override
    public boolean isAccountNonExpired(){
        return true;
    }
    @Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
    public String getEmail() {
        return email;
    }
}