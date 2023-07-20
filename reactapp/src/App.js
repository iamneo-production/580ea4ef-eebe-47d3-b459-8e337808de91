import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import PrivateRoutes from './utils/PrivateRoutes'
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';

// Admin
import AddAcademy from './components/Admin/AdminAcademy/AddAcademy';
import EditAcademy from './components/Admin/AdminAcademy/EditAcademy';
import AdminInstitute from './components/Admin/AdminAcademy/AdminInstitute';


//User
import AcademiesPage from "./components/Customer/UserAcademy/AcademiesPage";
import Course from "./components/Customer/Usercourse/Course"
import Details from './components/Customer/Viewacademy/Details';
import MainPage from './components/Customer/UserAcademy/MainPage';


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
            <Route element={<Login/>} path="/login"/>
            <Route element={<Login/>} path="/"/>
            <Route element={<Signup/>} path="/signup"/>



            {/* USER ROUTES */}
            <Route element={<div>Page Not Found</div>} path="*"/>
            <Route element={<AcademiesPage/>} path="/user/Academy"/>

            <Route path = "/course" element={<Course/>}/>

            <Route element={<Details/>} path="/Details"/>
            

              {/* ADMIN ROUTES */}
            <Route element={<AdminInstitute/>} path="/AdminInstitute"/>
            <Route element={<AddAcademy/>} path ="/admin/addInstitute"/>
            <Route element={<EditAcademy/>} path="admin/editInstitute/:instituteId"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;