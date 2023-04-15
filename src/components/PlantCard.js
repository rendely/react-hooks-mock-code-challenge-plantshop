import React from "react";

function PlantCard({plant, onUpdatePlant}) {

  function handleInStockButton(){
    onUpdatePlant(plant.id, 'isInStock', plant.isInStock === undefined ? false : !plant.isInStock);
  }

  function handleChangePrice(e){
    const price = e.target.value;
    onUpdatePlant(plant.id, 'price', price);
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p name="price-display">Price: {plant.price}</p>
      <input onChange={handleChangePrice} name="price=input" type="number" step="0.01" value={plant.price}></input>
      {plant.isInStock || plant.isInStock === undefined ? (
        <button onClick={handleInStockButton} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStockButton}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
