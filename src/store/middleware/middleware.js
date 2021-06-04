import { message } from 'antd';
import {
  setFilms,
  addFilmAction,
  delFilm,
  openCloseModal,
  startLoading,
  stopLoading,
} from '../action/action';

export const getFilms = () => async dispatch => {
  dispatch(startLoading());
  try {
    const res = await fetch('/films');
    const data = await res.json();

    dispatch(setFilms(data));
  } catch (err) {}
  dispatch(stopLoading());
};

export const addFilm = film => async dispatch => {
  try {
    const res = await fetch('/films', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(film),
    });
    const data = await res.json();

    dispatch(addFilmAction(data));
    dispatch(openCloseModal());
    message.success(`Congratulation you add film: ${data.title}`);
  } catch (err) {
    console.log(err);
  }
};

export const addFilmFromFile = films => async dispatch => {
  films.forEach(async film => {
    try {
      const res = await fetch('/films', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(film),
      });
      const data = await res.json();

      dispatch(addFilmAction(data));
      message.success(`Congratulation film ${data.title} add!`);
    } catch (err) {
      console.log(err);
    }
  });
  dispatch(openCloseModal());
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
    message.success(data.message, 30);
    return data;
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
