package com.examly.springapp.controller;


import com.examly.springapp.model.InstituteModel;
import com.examly.springapp.repository.InstituteModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;


// test 
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@CrossOrigin("*")

public class AdminController {

    @Autowired
    private InstituteModelRepository instituteModelRepository;


    @PostMapping("/admininstitute")
    public InstituteModel addInstitute(@RequestBody InstituteModel newInstitute) {
        return instituteModelRepository.save(newInstitute);
    }

    @GetMapping("/admin/viewInstitutes")
    public List<InstituteModel> ViewInstitute() {
        return instituteModelRepository.findAll();
    }


    @GetMapping("/admin/editInstitute/{instituteId}")

    public Optional<InstituteModel> editInstitute(@PathVariable Long instituteId) {
        return instituteModelRepository.findById(instituteId);
    }


    @PutMapping("/admin/editInstitute/{instituteId}")
    public Optional<InstituteModel> editInstitute(@RequestBody InstituteModel newInstitute, @PathVariable Long instituteId) {
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
    public String deleteInstitute(@PathVariable Long instituteId){
    instituteModelRepository.deleteById(instituteId);
    return "Institute with id"+instituteId+" has been deleted";
}




//tset

@GetMapping("/admin/institute")
public ResponseEntity<?> getAllInstitute() {
    
        List<?> allInstitute = instituteModelRepository.findAll();
        return ResponseEntity.ok(allInstitute);
     
}
@GetMapping("/admin/admission")
public ResponseEntity<?> getAllAdmission() {
    
        List<?> allInstitute = instituteModelRepository.findAll();
        return ResponseEntity.ok(allInstitute);
}

}