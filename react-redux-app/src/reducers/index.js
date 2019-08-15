import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from '../actions';

const initialState = {
  pokemon: [],
  isLoading: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload.map(pokemon => {
          return pokemon.data;
        }),
        isLoading: false,
        error: '',
      };
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
