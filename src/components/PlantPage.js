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

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
