import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onClickUpdatePlant}) {
  return (
    <ul className="cards">
      {plants.map(plant => <PlantCard key={plant.id} plant={plant} onClickUpdatePlant={onClickUpdatePlant}/>)}
    </ul>
  );
}

export default PlantList;
