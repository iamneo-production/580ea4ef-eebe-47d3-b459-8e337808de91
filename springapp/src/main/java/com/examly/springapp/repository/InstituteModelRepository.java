package com.examly.springapp.repository;

import com.examly.springapp.model.InstituteModel;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository

public interface InstituteModelRepository extends JpaRepository<InstituteModel,Long> {


}
