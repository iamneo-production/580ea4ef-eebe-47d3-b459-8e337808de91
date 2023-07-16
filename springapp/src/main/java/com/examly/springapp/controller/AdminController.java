package com.examly.springapp.controller;


import com.examly.springapp.model.InstituteModel;
import com.examly.springapp.repository.InstituteModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;


@RestController


public class AdminController {

    @Autowired
    private InstituteModelRepository instituteModelRepository;


    @PostMapping("/admininstitute")
    InstituteModel newInstitute(@RequestBody InstituteModel newInstitute) {
        return instituteModelRepository.save(newInstitute);
    }

    @GetMapping("/admin/viewInstitutes")
    List<InstituteModel> getAllInstitutes() {
        return instituteModelRepository.findAll();
    }


    @GetMapping("/admin/editInstitute/{instituteId}")

    Optional<InstituteModel> updateInstituteModel(@PathVariable Long instituteId) {
        return instituteModelRepository.findById(instituteId);
    }


    @PutMapping("/admin/editInstitute/{instituteId}")
    Optional<InstituteModel> updateInstituteModel(@RequestBody InstituteModel newInstitute, @PathVariable Long instituteId) {
        return instituteModelRepository.findById(instituteId)
                .map(instituteModel -> {
                    instituteModel.setEmail(newInstitute.getEmail());
                    instituteModel.setImageurl(newInstitute.getImageurl());
                    instituteModel.setInstituteAddress(newInstitute.getInstituteAddress());
                    instituteModel.setInstituteDescription(newInstitute.getInstituteDescription());
                    instituteModel.setInstituteName(newInstitute.getInstituteName());
                    instituteModel.setMobile(newInstitute.getMobile());
                    return instituteModelRepository.save(instituteModel);
                });
    }

    @DeleteMapping("/admin/deleteInstitutes/{instituteId}")
    String deleteInstituteModel(@PathVariable Long instituteId){
    instituteModelRepository.deleteById(instituteId);
    return "Institute with id"+instituteId+" has been deleted";
}
}