import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card className='pokemon-card'>
      <CardImg
        top
        width='100%'
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <CardBody>
        <CardTitle className='pokemon-name'>
          {pokemon.name.toUpperCase()}
        </CardTitle>
        <CardSubtitle className='pokemon-id'>#{pokemon.id}</CardSubtitle>
        <CardText>
          {pokemon.stats.map((stat, index) => {
            return (
              <div key={index}>
                <span className='pokemon-stat'>{stat.stat.name}:</span>{' '}
                {stat.base_stat}
              </div>
            );
          })}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
