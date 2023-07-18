import React, { useState } from "react";

import "./AcademyPage.css";


import InstituteCard from "./InstituteCard";
import Navbaar from "./Navbaar";


export default function AcademiesPage() {
  const [data, setData] = useState(
    [
    {
      "id": "userAcademyGrid1",
      "image": "https://cdn.unischolarz.com/blog/wp-content/uploads/2021/08/31051414/k-mitch-hodge-1jn6NuW0mG0-unsplash-min-1536x960.jpg",
      "title": "Madras Academy"
    },
    {
      "id": "userAcademyGrid2",
      "image": "https://www.k-state.edu/media/images/oct19/Regnier_Hall-sm.jpg",
      "title": "Bombay Academy"
    },
    {
      "id": "userAcademyGrid3",
      "image": "https://www.k-state.edu/media/images/oct19/Regnier_Hall-sm.jpg",
      "title": "Delhi Academy"
    },
    {
      "id": "userAcademyGrid4",
      "image": "https://www.k-state.edu/media/images/oct19/Regnier_Hall-sm.jpg",
      "title": "Hyderabad Academy"
    },
    {
      "id": "userAcademyGrid5",
      "image": "https://www.k-state.edu/media/images/oct19/Regnier_Hall-sm.jpg",
      "title": "Pune Academy"
    },
    {
      "id": "userAcademyGrid6",
      "image": "https://www.k-state.edu/media/images/oct19/Regnier_Hall-sm.jpg",
      "title": "Banglore Academy"
    },
    {
      "id": "userAcademyGrid7",
      "image": "https://www.k-state.edu/media/images/oct19/Regnier_Hall-sm.jpg",
      "title": "Kolkata Academy"
    },
    {
      "id": "userAcademyGrid8",
      "image": "https://www.k-state.edu/media/images/oct19/Regnier_Hall-sm.jpg",
      "title": "Gurgaon Academy"
    }
  ]
  
  );
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  


  //---fetching Institutes----//

  // useEffect(() => {
  //   async function getAllThemes() {
  //     try {
  //       const res = await axios.get(`${BASE_URL}/admin/theme`, { headers });
  //       setData(res.data);
  //       console.log("res", res);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   getAllThemes();
  // }, []);

  function handleSearch(e) {
    setSearchText(e.target.value);
  }
  //- ---------    UPDATE View ------//
  
    //-------View --------//
    //   axios.patch(`${BASE_URL}/user/getAllThemes/${id}`, updatedData.find((event) => event.themeid === id))
    //   .then((res) => {
    //     console.log("updated", res.data.id, res.data);
    //     setData(updatedData);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  

  const filterInstitutes = data.filter((singleInstitute) => {
    return singleInstitute.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  // /Dropdown filter/
  const sortInstitutes = filterInstitutes.sort((a, b) => {
    if (sortBy === "nameAsc") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "nameDesc") {
      return b.title.localeCompare(a.title);
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
      {data.length === 0 ? <div>loading... please check connection </div>  : (
        
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