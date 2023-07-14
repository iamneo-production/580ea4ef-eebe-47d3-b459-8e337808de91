import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import PrivateRoutes from './utils/PrivateRoutes'
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Details from './Viewacademy/Details';
import AddAcademy from './AdminAcademy/AddAcademy';
import EditAcademy from './AdminAcademy/EditAcademy';
import AdminHome from "./AdminAcademy/Home";
import Home from './components/Home';
import AdminInstitute from "./";
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Home/>} path="/" exact/>
                 <Route element={<AdminHome/>} path="/adminhome"/>
            </Route>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Signup/>} path="/signup"/>
            <Route element={<div>Page Not Found</div>} path="*"/>
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