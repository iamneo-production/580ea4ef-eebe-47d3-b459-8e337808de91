import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import PrivateRoutes from './utils/PrivateRoutes'
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';

// Admin
import AddAcademy from './components/Admin/AdminAcademy/AddAcademy';
import EditAcademy from './components/Admin/AdminAcademy/EditAcademy';
import AdminInstitute from './components/Admin/AdminAcademy/AdminInstitute';
import EditCourse from './components/Admin/Admincourse/EditCourse';
import CourseForm from './components/Admin/Admincourse/CourseForm';
import Admincourse from './components/Admin/Admincourse/Admincourse';
import AddStudent from './components/Admin/AdminStudent/AddStudent';
import EditStudent from './components/Admin/AdminStudent/EditStudent';
import Student from './components/Admin/AdminStudent/Student';

//User
import AcademiesPage from "./components/Customer/UserAcademy/AcademiesPage";
import Course from "./components/Customer/Usercourse/Course"
import Details from './components/Customer/Viewacademy/Details';
import MainPage from './components/Customer/UserAcademy/MainPage';
import EnrolledCourse from './components/Customer/EnrolledCourse/EnrolledCourse';
import Mylearning from './components/Customer/EnrolledCourse/Mylearning';
import FeedbackPage from './components/Customer/EnrolledCourse/FeedbackPage';
import Students from './components/Customer/Viewacademy/Students';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route element={<PrivateRoutes />}>
                <Route element={<MainPage/>} path="/" exact/>
                <Route element={<AdminHome/>} path="/adminhome"/>
            // </Route> */}

          {/* {public route} */}
          <Route element={<Login />} path="/login" />
          <Route element={<Login />} path="/" />
          <Route element={<Signup />} path="/signup" />



          {/* USER ROUTES */}
          <Route element={<div>Page Not Found</div>} path="*" />
          <Route element={<AcademiesPage />} path="/user/Academy" />

          <Route path="/course" element={<Course />} />

          <Route element={<Details />} path="/user/Details" />
          <Route element={<Students/>} path="/user/Students"/>
          <Route  element={<Details/>} path='/user/UpdateStudent1/:studentId'/>

          {/* <Route element={<Enrolledcourse />} path="/EnrolledCourse" /> */}
          <Route element={<EnrolledCourse />} path="/user/EnrolledCourse" />
          <Route element={<Mylearning />} path="/user/Mylearning" />
          <Route element={<FeedbackPage />} path="/user/FeedbackPage" />


          {/* ADMIN ROUTES */}
          <Route element={<AdminInstitute />} path="/AdminInstitute" />
          <Route element={<AddAcademy />} path="/admin/addInstitute" />
          <Route element={<EditAcademy />} path="admin/editInstitute/:instituteId" />

          <Route path="/Admincourse" element={<Admincourse />} />
          <Route path="/courseform" element={<CourseForm />} />
          <Route path="/editcourse/:courseId" element={<EditCourse />} />

          <Route path='/admin/viewStudent' element={<Student/>} />
          <Route path='/admin/addStudent' element={<AddStudent />} />
          <Route path='/admin/editStudent/:studentId' element={<EditStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
