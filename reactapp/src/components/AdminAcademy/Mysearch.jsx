import React from "react";
const Mysearch= () => {
  return (
    <>
    
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Type here to search the Academy"
          aria-label="Search"
          style={{marginTop:"30px",marginLeft:"80px",height:"50px",width:"400px",marginBottom:"20px"}}
          />
          <button
          type="Submit"
          style={{marginLeft:"30px",height:"50px",width:"100px",borderRadius:"10px",backgroundColor:"rgb(73, 240, 7)"}}>SEARCH
          </button>
  
    </>
  );
};


export default Mysearch;