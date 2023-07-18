import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import PrivateRoutes from './utils/PrivateRoutes'
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Details from './components/Viewacademy/Details';
import AddAcademy from './components/AdminAcademy/AddAcademy';
import EditAcademy from './components/AdminAcademy/EditAcademy';
//import AdminHome from './components/dummydashboard/AdminHome';
//import Home from './components/dummydashboard/Home';
import AcademiesPage from "./components/UserAcademy/AcademiesPage";
import Course from "./components/Usercourse/Course"

import AdminInstitute from './components/AdminAcademy/AdminInstitute';
import MainPage from './components/UserAcademy/MainPage';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            {/* <Route element={<PrivateRoutes />}>
                <Route element={<MainPage/>} path="/" exact/>
                <Route element={<AdminHome/>} path="/adminhome"/>
            </Route> */}
            <Route element={<Login/>} path="/login"/>
            <Route element={<Login/>} path="/"/>
            <Route element={<Signup/>} path="/signup"/>
            <Route element={<div>Page Not Found</div>} path="*"/>
            <Route element={<AcademiesPage/>} path="/academies"/>
            <Route path = "/course" element={<Course/>}/>

            <Route element={<Details/>} path="/Details"/>


            <Route element={<AdminInstitute/>} path="/AdminInstitute"/>
            <Route element={<AddAcademy/>} path ="/admin/addInstitute"/>
            <Route element={<EditAcademy/>} path="admin/editInstitute/:instituteId"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;