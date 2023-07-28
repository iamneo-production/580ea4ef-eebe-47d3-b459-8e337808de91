import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../utils/APIUtils";

const Auth = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post(`${API_BASE_URL}/validate`, token)
        .then((response) => {
          const userRole = response.data.userRole;
          if (userRole === "user") {
            navigate("/academies");
          } else if (userRole === "admin") {
            navigate("/admininstitute");
          } else {
            console.error("Invalid userRole or userRole not found.");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Error in token validation:", error);
          navigate("/login");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      console.log("User not logged in.");
      navigate("/login");
      setLoading(false);
    }
  }, [navigate]);

  return loading ? <div>Loading...</div> : null;
};

export default Auth;