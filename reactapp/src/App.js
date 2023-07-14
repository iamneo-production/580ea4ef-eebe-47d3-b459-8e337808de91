import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import PrivateRoutes from './utils/PrivateRoutes'
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Details from './Viewacademy/Details';


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
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;