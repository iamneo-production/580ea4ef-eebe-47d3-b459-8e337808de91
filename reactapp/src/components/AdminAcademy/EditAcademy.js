import Navigbar from "./Navbar";
import Edit from "./Edit";


export default function EditAcademy(){
  return(
  <>
<header>
  <Navigbar />
  <h2 style={{marginTop:"30px"}}>
    <center>Edit Academy</center>
    </h2>
</header>

<body style={{backgroundColor:"gray"}}>
<Edit  />
</body>

</>
      
  );
}