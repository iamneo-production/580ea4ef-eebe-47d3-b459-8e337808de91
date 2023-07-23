import axios from 'axios';

class StudentServices {
    getStudent1() {
        return axios.get('https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io/user/viewAdmissions')
    }
    saveStudent(student){
        return axios.post('https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io/user/addAdmission',student)
    }
    getStudents(studentId){
        return axios.get('https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io/user/viewAdmissions'+'/'+studentId)
    }
    updateStudent(studentId,student){
        return axios.put('https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io/user/editAdmission'+'/'+studentId,student)
    }
}
export default new StudentServices();