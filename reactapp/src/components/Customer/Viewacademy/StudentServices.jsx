import axios from 'axios';
import {API_BASE_URL} from "../../../utils/APIUtils";

class StudentServices {
    getStudent1() {
        // return axios.get('https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io/user/viewAdmissions')
        return axios.get(`${API_BASE_URL}/user/viewAdmissions`)
    }
    saveStudent(student){
        // return axios.post('https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io/user/addAdmission',student)
        return axios.get(`${API_BASE_URL}/user/addAdmission`)
    }
    getStudents(studentId){
        // return axios.get('https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io/user/viewAdmissions'+'/'+studentId)
        return axios.get(`${API_BASE_URL}/user/viewAdmissions`+'/'+studentId) 
    }
    updateStudent(studentId,student){
        // return axios.put('https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io/user/editAdmission'+'/'+studentId,student)
        return axios.put(`${API_BASE_URL}/user/editAdmission`+'/'+studentId,student)
    }
}
export default new StudentServices();