import Navigbar from "./Navbar";
import Add from "./Add";


export default function AddAcademy(){
  return(
  <>

  
<header>
  <Navigbar />
  <h2 style={{marginTop:"20px"}}>
    <center>Add Academy</center>
    </h2>
</header>

<body style={{backgroundColor:"gray"}}>
<Add  />
</body>

</>
      
  );
}