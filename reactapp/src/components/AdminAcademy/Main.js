import { React,useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { LuEdit } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";
import { Link, useNavigate,useParams } from 'react-router-dom';



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
    const result=await axios.get("http://localhost:8080/admin/viewInstitutes");
setUsers(result.data);
  };

const deleteUser=async (instituteId)=>{
  await axios.delete(`http://localhost:8080/admin/deleteInstitutes/${instituteId}`)
  loadUsers()
}

    
  return (<div>
    <section>

{users.map((user)=> (

<Card key ={user.instituteId} style={{backgroundColor:"gray",borderStyle:"none"}}>
          <div style={{marginTop:"20px",height:"fit-content",width:"1500px",display:"flex",flexwrap:"wrap",justifyContent:"space-around",alignitems:"center",border:"5px",flexWrap:"wrap"}} >
      
     

         <div style={{height:"fit-content",width:"fit-content",margin:"40px 20px",padding:"10px",backgroundColor:"white",border:"1px solid black",borderRadius:"25px"}}>
      <>      
      <Card.Img variant="top"  style={{height:"200px"}} src={user.imageurl} className="cover"/>
     
      <Card.Body>

      <Card.Text style={{fontSize:"15px"}}>
            {"Place : " + user.instituteAddress}
      </Card.Text>

         <div>
          <span style={{marginLeft:"120px"}}>



<button id="editAcademy"><Link to={`/admin/editInstitute/${user.instituteId}`}><LuEdit/></Link></button>



            </span>
            <span style={{marginLeft:"20px"}}>
            <button onClick={()=>deleteUser(user.instituteId)}><FaTrash /></button>
            </span>
            </div>
        </Card.Body></>
        </div>
     
      </div>
    </Card>
))}
    </section>
    <section>


    <div>
<button style={{marginBottom:"40px",fontSize:"20px",backgroundColor:"rgb(0, 204, 0)",marginLeft:"1200px",height:"60px",width:"220px",borderRadius:"25px",border:"1px solid green"}} onClick={goToAdd} ><GrAddCircle />Add Academy </button>
</div> 





    </section>
   
 
    </div>
  );
}

export default Main;