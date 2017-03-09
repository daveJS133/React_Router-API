import React from 'react';
import PeopleEach from './PeopleEach.jsx';

const PeopleList = ({people}) => {
  const stats = people.map(({name, height, mass, gender}, index) => {
    return (
      <PeopleEach
        key={index}
        name={name}
        height={height + "cm"}
        mass={mass + "kg"}
        gender = {gender}
         />
        
    )
  });

  return (
    <div>
      {stats}
    </div>
  );
}

export default PeopleList;