import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);

  useEffect(loadPlants,[]);

  function loadPlants(){
    fetch('http://localhost:6001/plants')
    .then(r=>r.json())
    .then(d=> setPlants(d))
  }
  
  function handleSubmitPlant(newPlant){
    fetch('http://localhost:6001/plants',{
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newPlant)
    })
      .then(r => r.json())
      .then(newPlant => setPlants([...plants, newPlant]))
  }

  function handleInStockButton(id, isInStock){
    fetch('http://localhost:6001/plants/'+id,{
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({'isInStock': isInStock})
    })
      .then(r => r.json())
      .then(newPlant => {
        setPlants(plants.map(plant => {
          if (plant.id === id) return newPlant;
          else return plant;
        }));
        }
      )
  }

  return (
    <main>
      <NewPlantForm onSubmitPlant={handleSubmitPlant}/>
      <Search />
      <PlantList plants={plants} onClickInStockButton={handleInStockButton} />
    </main>
  );
}

export default PlantPage;
