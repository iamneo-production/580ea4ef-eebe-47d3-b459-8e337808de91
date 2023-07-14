import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Viewacademy from './Viewacademy/Viewacademy.jsx';
import Academy from './Viewacademy/Academy';
import ListOfCourses from './Viewacademy/ListOfCourses';
import Details from './Viewacademy/Details';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Viewacademy/>}/>
      <Route path='/Academy' element={<Academy/>}/>
      <Route path='/ListOfCourses' element={<ListOfCourses/>}/>
      <Route path='/Details' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;