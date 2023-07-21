import Navigbar from './Navbar';
import Main from './Main';
import Mysearch from './Mysearch';



const AdminInstitute= () => {

  return(
    <div>
    <Navigbar />
    <body style={{backgroundColor:"rgb(230, 248, 250)"}}>
      <section style={{height:"100px",justifyContent:"center",fontSize:"40px",paddingTop:"18px",backgroundColor:"rgb(230, 248, 250)",color:"black"}}>MANAGE ACADEMY</section>
    <section>
      <Main/>
    
      </section>
    </body>
   </div>
  );
}

export default AdminInstitute;