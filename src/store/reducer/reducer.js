import {
  ADD_FILM,
  DEL_FILM,
  OPEN_CLOSE_MODAL,
  SEARCH_FILMS,
  SET_FILMS,
} from '../action/action';

const initialState = {
  films: [],
  isLoading: false,
  error: null,
  modalIsOpen: false,
};

export const selectFilms = state => state.films.films;
export const selectError = state => state.films.error;
export const selectIsLigin = state => state.films.isLoading;
export const selectModalIsOpen = state => state.films.modalIsOpen;

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILMS:
      return {
        ...state,
        films: payload,
      };
    case ADD_FILM:
      return {
        ...state,
        films: [...state.films, payload].sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        }),
      };
    case DEL_FILM:
      return {
        ...state,
        films: state.films.filter(film => film.itemId !== payload.itemId),
      };
    case SEARCH_FILMS:
      return {
        ...state,
        films: payload,
      };
    case OPEN_CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };
    default:
      return state;
  }
};
