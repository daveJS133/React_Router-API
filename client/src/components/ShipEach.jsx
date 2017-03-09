import React from 'react';

const ShipEach = ({name, model, manufacturer}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p>Manufacturer: {manufacturer}</p>
    </div>
  )
}

export default ShipEach;