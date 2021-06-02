export const SET_FILMS = 'SET_FILMS';
export const ADD_FILM = 'ADD_FILM';
export const DEL_FILM = 'DEL_FILM';
export const SEARCH_FILMS = 'SEARCH_FILMS';
export const OPEN_CLOSE_MODAL = 'OPEN_CLOSE_MODAL';

export const setFilms = payload => ({
  type: SET_FILMS,
  payload,
});
export const addFilmAction = payload => ({
  type: ADD_FILM,
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
