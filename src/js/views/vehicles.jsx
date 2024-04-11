import React, { useContext } from "react";
import DataCard from "../component/dataCard.jsx";
import { Context } from "../store/appContext";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid mt-5 pt-4">
      <h1 className="text-white">Vehicles</h1>
      <div className="d-flex flex-wrap justify-content-start">
        {store.vehicles.map((current, index) => (
          <DataCard
            key={index}
            type="vehicles"
            data={current}
            addFavoriteAction={actions.addFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Vehicles;