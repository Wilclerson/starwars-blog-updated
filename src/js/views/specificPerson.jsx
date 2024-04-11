import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function SpecificPerson() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [personData, setPersonData] = useState({});

  const fetchThisPerson = async (id) => {
    const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
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
    setPersonData(response.result.properties);
    return response.result.properties;
  };

  useEffect(() => {
    fetchThisPerson(id);
  }, []);

  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="d-flex justify-content-center">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          style={{ borderRadius: "20px" }}
        ></img>
        <div className="information-group">
          <ul style={{ listStyleType: "none" }}>
            <li className="text-white" style={{ fontSize: "50px" }}>
              {personData.name}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Height: {personData.height}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Mass: {personData.mass}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Hair Color: {personData.hair_color}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Skin Color: {personData.skin_color}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Eye Color: {personData.eye_color}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Birth Year: {personData.birth_year}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Gender: {personData.gender}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}