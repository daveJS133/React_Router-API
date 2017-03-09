import React from 'react';

const PeopleEach = ({name, height, mass, gender}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Gender: {gender}</p>
    </div>
  )
}

export default PeopleEach;