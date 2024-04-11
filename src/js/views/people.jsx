import React, { useContext } from "react";
import DataCard from "../component/dataCard.jsx";
import { Context } from "../store/appContext";

export const People = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid mt-5 pt-4 justify-content-center">
      <h1 className="text-white">People</h1>
      <div className="d-flex flex-wrap justify-content-start">
        {store.people.map((current, index) => (
          <DataCard
            key={index}
            type="people"
            data={current}
            addFavoriteAction={actions.addFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default People;