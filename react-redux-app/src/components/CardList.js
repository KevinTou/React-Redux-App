import React from 'react';

import PokemonCard from './PokemonCard';

const CardList = ({ list }) => {
  return (
    <div className='container'>
      {list.map(item => {
        return <PokemonCard pokemon={item} key={item.id} />;
      })}
    </div>
  );
};

export default CardList;
