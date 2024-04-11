import React, { useContext } from "react";
import DataCard from "../component/dataCard.jsx";
import { Context } from "../store/appContext";

export const Starships = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid mt-5 pt-4">
      <h1 className="text-white">Starships</h1>
      <div className="d-flex flex-wrap justify-content-start">
        {store.starships.map((current, index) => (
          <DataCard
            key={index}
            type="starships"
            data={current}
            addFavoriteAction={actions.addFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Starships;