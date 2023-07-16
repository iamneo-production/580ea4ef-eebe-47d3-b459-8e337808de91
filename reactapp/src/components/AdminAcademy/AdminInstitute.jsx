import Navigbar from './Navbar';
import Main from './Main';
import Mysearch from './Mysearch';



const AdminInstitute= () => {

  return(
    <div>
    <Navigbar />
    <body style={{backgroundColor:"gray"}}>
      <section style={{height:"100px",display:"flex",justifyContent:"center",marginTop:"0px",paddingTop:"18px",backgroundColor:"gray"}}><Mysearch /> </section>
    <section>
      <Main/>
    
      </section>
    </body>
   </div>
  );
}

export default AdminInstitute;