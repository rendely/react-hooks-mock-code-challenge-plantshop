import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');

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

  function handleUpdatePlant(id, key, value){
    fetch('http://localhost:6001/plants/'+id,{
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({[key]: value})
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

  function searchPlants(plants){
    return plants.filter(plant =>{
      return plant.name.toLowerCase().match(search.toLowerCase()) || search === ''
    })
  }

  return (
    <main>
      <NewPlantForm onSubmitPlant={handleSubmitPlant}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={searchPlants(plants)} onUpdatePlant={handleUpdatePlant} />
    </main>
  );
}

export default PlantPage;
