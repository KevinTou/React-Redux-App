import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../actions';

import './App.css';
import CardList from './CardList';

const App = props => {
  useEffect(() => {
    if (props.pokemon.length === 0) {
      props.getPokemon();
    }
  }, [props.pokemon]);

  return (
    <div className='app'>
      <h1>Pokemon</h1>
      <CardList list={props.pokemon} />
    </div>
  );
};

const mapStatesToProp = state => {
  return {
    pokemon: state.pokemon,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(
  mapStatesToProp,
  { getPokemon },
)(App);
