import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function InstituteCard({ singleInstitute }) {
  const navigate = useNavigate();
  const handleButtonClick = () => {

    navigate("/course")
    // console.log('Button clicked! and id is,',singleInstitute.instituteId);
    // navigate(`course/${singleInstitute.instituteId}`)
  };

  return (
    <div className="single-institute-card">
      <img height="200px" width="280px" src={singleInstitute.imageurl} alt="image" />
      <h2 className="institute-name">{singleInstitute.instituteName}</h2>
      
      <button 
      onClick={()=>{
        handleButtonClick()
      }} 
      className="view-button">
        {/* Viewacademy */}
        View Courses
      </button>
    </div>
  );
}
