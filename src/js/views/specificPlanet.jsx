import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function SpecificPlanet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [planetData, setPlanetData] = useState({});

  const fetchThisPlanet = async (id) => {
    const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
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
    setPlanetData(response.result.properties);
    return response.result.properties;
  };

  useEffect(() => {
    fetchThisPlanet(id);
  }, []);

  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="d-flex justify-content-center">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          style={{ borderRadius: "20px" }}
        ></img>
        <div className="information-group">
          <ul style={{ listStyleType: "none" }}>
            <li className="text-white" style={{ fontSize: "50px" }}>
              {planetData.name}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Diameter: {planetData.diameter}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Rotation Period: {planetData.rotation_period}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Orbital Period: {planetData.orbital_period}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Gravity: {planetData.gravity}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Population: {planetData.population}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Climate: {planetData.climate}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Terrain: {planetData.terrain}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Surface Water: {planetData.surface_water}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}