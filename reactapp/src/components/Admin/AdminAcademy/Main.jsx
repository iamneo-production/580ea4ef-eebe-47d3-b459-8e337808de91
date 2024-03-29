import { React,useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { LuEdit } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";
import { Link, useNavigate,useParams } from 'react-router-dom';
import {API_BASE_URL} from "../../../utils/APIUtils";

const Main =() => {

  const navigate =useNavigate();
  function goToAdd(){
    navigate("/admin/addInstitute")
  }

  const [users,setUsers] = useState([]);

  const {instituteId}=useParams()

  useEffect(() => {
loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result=await axios.get(`${API_BASE_URL}/admin/viewInstitutes`);
setUsers(result.data);
  };

const deleteUser=async (instituteId)=>{
  await axios.delete(`${API_BASE_URL}/admin/deleteInstitutes/${instituteId}`)
  loadUsers()
}

return (<div>
  <Container fluid>
  <Row xl={3} lg={3} md={2} xs={1}>
  {users.map((user)=> (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
  
    
  <Card key ={user.instituteId} style={{backgroundColor:"rgb(230, 248, 250)",borderStyle:"none"}}>
            
  
           <div style={{height:"fit-content",width:"fit-content",margin:"40px 20px",padding:"10px",backgroundColor:"white",border:"1px solid black",borderRadius:"25px"}}>
        <>      
        
        <Card.Img variant="top"  style={{height:"200px"}} src={user.imageurl} className="cover"/>
       
        <Card.Body>
  
        <Card.Text style={{fontSize:"15px"}}>
              {user.instituteName + " located at " + user.instituteAddress}
        </Card.Text>
  
        <div>
  
  <span style={{marginLeft:"120px"}}>
   <button id="editAcademy"><Link to={`/admin/editInstitute/${user.instituteId}`}><LuEdit/></Link></button>
    </span>
  
    <span style={{marginLeft:"20px"}}>
    <button onClick={()=>deleteUser(user.instituteId)}><FaTrash /></button>
    </span>
  
    </div>
          </Card.Body>
          </>
          </div>
       
      </Card>
      </div>
    
  ))}
  </Row>
  </Container>
  
      
      <section>
  
  
      <div>
  <button style={{marginBottom:"40px",fontSize:"20px",backgroundColor:"rgb(73, 240, 7)",marginLeft:"1200px",height:"60px",width:"220px",borderRadius:"25px",border:"1px rgb(73, 240, 7)"}} onClick={goToAdd} ><GrAddCircle />Add Academy </button>
  </div> 
  
  
  
  
  
      </section>
     
   
      </div>
      
    );
  }
  
  export default Main;