import React from "react";

function PlantCard({plant, onClickInStockButton}) {

  function handleInStockButton(){
    onClickInStockButton(plant.id, plant.isInStock === undefined ? false : !plant.isInStock);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.isInStock || plant.isInStock === undefined ? (
        <button onClick={handleInStockButton} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStockButton}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
