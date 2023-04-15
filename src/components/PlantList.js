import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onClickInStockButton}) {
  return (
    <ul className="cards">
      {plants.map(plant => <PlantCard key={plant.id} plant={plant} onClickInStockButton={onClickInStockButton}/>)}
    </ul>
  );
}

export default PlantList;
