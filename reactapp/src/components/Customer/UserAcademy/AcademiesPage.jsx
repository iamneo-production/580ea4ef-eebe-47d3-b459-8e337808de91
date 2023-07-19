import React, { useState,useEffect } from "react";
import axios from 'axios';
import {API_BASE_URL} from "../../../utils/APIUtils";
import "./AcademyPage.css";

import InstituteCard from "./InstituteCard";
import Navbaar from "./Navbaar";


export default function AcademiesPage() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  


  //---fetching Institutes----//

  useEffect(() => {
    async function getInstitutesFromDb() {
      try {
        const res = await axios.get(`${API_BASE_URL}/admin/viewInstitutes`);
        setData(res.data);
    
      } catch (e) {
        alert(e);
      }
    }
    getInstitutesFromDb();
  }, []);

  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  

  const filterInstitutes = data.filter((singleInstitute) => {
    return singleInstitute.instituteName
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  // /Dropdown filter/
  const sortInstitutes = filterInstitutes.sort((a, b) => {
    if (sortBy === "nameAsc") {
      return a.instituteName.localeCompare(b.instituteName);
    } else if (sortBy === "nameDesc") {
      return b.instituteName.localeCompare(a.instituteName);
    }  else {
      return 0;
    }
  });

  const institutes = sortInstitutes.map((singleInstitute) => {
    return (
      <InstituteCard
        singleInstitute={singleInstitute}
       
        key={singleInstitute.id}
      />
    );
  });

  return (
    <div className="blue-background">
      <Navbaar />
      {data.length === 0 ? <div>
        <h1>!!!Please Read and follow The Instructions Carefully!!!</h1>
        <h1>!!!Its Not The Error or Incomplete Work!!!</h1>

        <h3>1.Create Your Own Database Using sql commands</h3>
        <h3>2.Register as Admin then Login and Add Data(ex.Academy Details)</h3>
        <h3>3.Now Register and Login as User and View Details</h3>
        <h3>4.Then Perform the Respective Operations Like Enroll Course etc.</h3>
        
        </div>  : (
        
        <div className="Homepage">
          <div className="wrap">
            
            <div className="search-box">
              <input
                className="search_input"
                type="text"
                placeholder="Type here to Search"
                name="searchText"
                value={searchText}
                onChange={handleSearch}
              />
              <button
                type="submit"
                id="searchInstituteButton"
              ></button>
            </div>
            {/* Add sort by dropdown filter  */}
            <div className="filter-container">
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Search</option>
                <option value="nameAsc">A-Z</option>
                <option value="nameDesc">Z-A</option>
         
              </select>
            </div>
          </div>

          <div className="grid-container">{institutes}</div>
        </div>
      )}
    </div>
  );
}