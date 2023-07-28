package com.examly.springapp.repository;

import com.examly.springapp.model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//import org.springframework.data.repository.query.Param;
import java.util.List;

@Repository

public interface StudentRepository extends JpaRepository<StudentModel,Long> {
    //newly added
    StudentModel findByEmail(String email);
    //List<StudentModel> findByEmail(String email);
   // List<StudentModel> findByEmail(@Param("UserEmail") String email);
}
