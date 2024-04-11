import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function SpecificVehicle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicleData, setVehicleData] = useState({});

  const fetchThisVehicle = async (id) => {
    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
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
    setVehicleData(response.result.properties);
    return response.result.properties;
  };

  useEffect(() => {
    fetchThisVehicle(id);
  }, []);

  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="d-flex justify-content-center">
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
          style={{ borderRadius: "20px" }}
        ></img>
        <div className="information-group">
          <ul style={{ listStyleType: "none" }}>
            <li className="text-white" style={{ fontSize: "50px" }}>
              {vehicleData.name}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Model: {vehicleData.model}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Vehicle Class: {vehicleData.vehicle_class}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Manufacturer: {vehicleData.manufacturer}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Cost In Credits: {vehicleData.cost_in_credits}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Cargo Capacity: {vehicleData.cargo_capacity}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}