import React, {useState} from "react";

function NewPlantForm({onSubmitPlant}) {

  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: 0
  });

  function handleChange(e){
    const key = e.target.name;
    const value = e.target.value;
    setNewPlant({...newPlant, [key]:value});
  }

  function handleSubmit(e){
    e.preventDefault();
    onSubmitPlant(newPlant);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" value={newPlant.name} />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" value={newPlant.image}/>
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
