import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function SpecificStarship() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [starshipData, setStarshipData] = useState({});

  const fetchThisStarship = async (id) => {
    const response = await fetch(`https://www.swapi.tech/api/starships/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        return response.json();
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(response.result.properties);
    setStarshipData(response.result.properties);
    return response.result.properties;
  };

  useEffect(() => {
    fetchThisStarship(id);
  }, []);

  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="d-flex justify-content-center">
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          style={{ borderRadius: "20px" }}
        ></img>
        <div className="information-group">
          <ul style={{ listStyleType: "none" }}>
            <li className="text-white" style={{ fontSize: "50px" }}>
              {starshipData.name}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Class: {starshipData.starship_class}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Cost in Credits: {starshipData.cost_in_credits}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Manufacturer: {starshipData.manufacturer}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Cargo Capacity: {starshipData.cargo_capacity}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}