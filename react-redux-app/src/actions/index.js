import axios from 'axios';

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const getPokemon = () => {
  return dispatch => {
    dispatch({ type: FETCH_POKEMON_START });
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        // console.log(response.data.results);
        return response.data.results;
        // Result array
      })
      .then(results => {
        return results.map(item => axios.get(item.url));
        // Array of Promises
      })
      .then(promises => {
        // Axios calls which waits for all promises to resolve
        return Promise.all(promises).then(res => {
          // console.log('Individual pokemon: ', res);
          dispatch({
            type: FETCH_POKEMON_SUCCESS,
            payload: res,
          });
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_POKEMON_FAILURE, payload: err.response });
      });
  };
};
