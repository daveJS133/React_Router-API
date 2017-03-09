import React from 'react';
import ShipEach from './ShipEach.jsx';

const ShipsList = ({ships}) => {
  const stats = ships.map(({name, model, manufacturer}, index) => {
    return (
      <ShipEach
        key={index}
        name={name}
        model={model}
        manafacturer={manufacturer}
         />
        
    )
  });

  return (
    <div>
      {stats}
    </div>
  );
}

export default ShipsList;