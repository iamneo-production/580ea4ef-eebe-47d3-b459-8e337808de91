import React from 'react';

export default function InstituteCard({ singleInstitute }) {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="single-institute-card">
      <img height="200px" width="280px" src={singleInstitute.imageurl} alt="image" />
      <h2 className="institute-name">{singleInstitute.instituteName}</h2>
      
      <button onClick={handleButtonClick} className="view-button">
        Viewacademy
      </button>
    </div>
  );
}
