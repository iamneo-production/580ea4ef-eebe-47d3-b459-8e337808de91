import Navigbar from "./Navbar";
import Add from "./Add";


export default function AddAcademy(){
  return (
    <div style={{backgroundColor: "rgb(250, 213, 170)"}}>
      <header>
        <Navigbar />
        <h2 style={{ marginTop: "20px", textAlign: "center" }}>Add Academy</h2>
      </header>

      <body style={{ backgroundColor: "rgb(250, 213, 170)" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <Add />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
