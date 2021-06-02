import {
  setFilms,
  addFilmAction,
  delFilm,
  openCloseModal,
} from '../action/action';

export const getFilms = () => async dispatch => {
  try {
    const res = await fetch('/films');
    const data = await res.json();

    dispatch(setFilms(data));
  } catch (err) {}
};

export const addFilm = film => async dispatch => {
  console.log(film);
  try {
    const res = await fetch('/films', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(film),
    });
    const data = await res.json();

    dispatch(addFilmAction(data));
    dispatch(openCloseModal());
  } catch (err) {
    console.log(err);
  }
};

export const deleteFilm = itemId => async dispatch => {
  try {
    const res = await fetch('/films', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemId),
    });
    const data = await res.json();

    dispatch(delFilm(itemId));
  } catch (err) {
    console.log(err);
  }
};

export const searchFilms = query => async dispatch => {
  try {
    const res = await fetch('/films/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query),
    });
    const data = await res.json();

    dispatch(setFilms(data));
  } catch (err) {
    console.log(err);
  }
};
