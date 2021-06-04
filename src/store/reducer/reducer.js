import {
  ADD_FILM,
  ADD_FILM_FROM_FILE,
  DEL_ERROR,
  DEL_FILM,
  OPEN_CLOSE_MODAL,
  SEARCH_FILMS,
  SET_ERROR,
  SET_FILMS,
  START_LOADING,
  STOP_LOADING,
} from '../action/action';

const initialState = {
  films: [],
  isLoading: false,
  error: null,
  modalIsOpen: false,
};

export const selectFilms = state => state.films.films;
export const selectError = state => state.films.error;
export const selectIsLoading = state => state.films.isLoading;
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
          const aTitle = a.title.toLowerCase();
          const bTitle = b.title.toLowerCase();
          if (aTitle > bTitle) {
            return 1;
          }
          if (aTitle < bTitle) {
            return -1;
          }
          return 0;
        }),
      };
    case ADD_FILM_FROM_FILE:
      return {
        ...state,
        films: [...state.films, ...payload].sort((a, b) => {
          const aTitle = a.title.toLowerCase();
          const bTitle = b.title.toLowerCase();
          if (aTitle > bTitle) {
            return 1;
          }
          if (aTitle < bTitle) {
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
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case DEL_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
