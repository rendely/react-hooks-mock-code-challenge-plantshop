import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(r=>r.json())
    .then(d=> {setPlants(d); console.log(d);})
  },[])

  function handleSubmitPlant(newPlant){
    fetch('http://localhost:6001/plants',{
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newPlant)
    })
      .then(r => r.json())
      .then(newPlant => setPlants([...plants, newPlant]))
  }

  return (
    <main>
      <NewPlantForm onSubmitPlant={handleSubmitPlant}/>
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
