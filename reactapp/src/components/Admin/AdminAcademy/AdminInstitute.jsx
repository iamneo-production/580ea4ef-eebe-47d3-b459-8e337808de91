import Navigbar from './Navbar';
import Main from './Main';
import Mysearch from './Mysearch';



const AdminInstitute= () => {

  return(
    <div>
    <Navigbar />
    <body style={{backgroundColor:"rgb(250, 213, 170)"}}>
      <section style={{height:"100px",justifyContent:"center",marginTop:"0px",paddingTop:"18px",backgroundColor:"rgb(250, 213, 170)",color:"black"}}>MANAGE ACADEMY</section>
    <section>
      <Main/>
    
      </section>
    </body>
   </div>
  );
}

export default AdminInstitute;