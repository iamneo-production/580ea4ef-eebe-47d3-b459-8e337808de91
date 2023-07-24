package com.examly.springapp.repository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<AdminModel,Integer> {

   Optional<AdminModel> findByEmailAndPassword(String email, String password);

}