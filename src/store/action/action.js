export const SET_FILMS = 'SET_FILMS';
export const ADD_FILM = 'ADD_FILM';
export const ADD_FILM_FROM_FILE = 'ADD_FILM_FROM_FILE';
export const DEL_FILM = 'DEL_FILM';
export const SEARCH_FILMS = 'SEARCH_FILMS';
export const OPEN_CLOSE_MODAL = 'OPEN_CLOSE_MODAL';
export const SET_ERROR = 'SET_ERROR';
export const DEL_ERROR = 'DEL_ERROR';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const setFilms = payload => ({
  type: SET_FILMS,
  payload,
});
export const addFilmAction = payload => ({
  type: ADD_FILM,
  payload,
});
export const addFromFile = payload => ({
  type: ADD_FILM_FROM_FILE,
  payload,
});
export const delFilm = payload => ({
  type: DEL_FILM,
  payload,
});
export const searchFilms = payload => ({
  type: SEARCH_FILMS,
  payload,
});
export const openCloseModal = () => ({
  type: OPEN_CLOSE_MODAL,
});
export const startLoading = () => ({
  type: START_LOADING,
});
export const stopLoading = () => ({
  type: STOP_LOADING,
});
export const addError = payload => ({
  type: SET_ERROR,
  payload,
});
