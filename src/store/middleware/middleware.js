import { message } from 'antd';
import {
  setFilms,
  addFilmAction,
  delFilm,
  openCloseModal,
  startLoading,
  stopLoading,
  addFromFile,
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

    if (res.status === 200) {
      dispatch(addFilmAction(data));
      dispatch(openCloseModal());
      message.success(`Congratulation film ${data.title} add!`);
    }
    if (res.status === 201) {
      message.warning(data.message);
    }
  } catch (err) {
    console.log(err);
  }
};

export const addFilmFromFile = films => async dispatch => {
  try {
    const res = await fetch('/films/file', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ films }),
    });
    const data = await res.json();

    console.log(data);

    if (res.status === 200) {
      const addFilmTitle = data.add.map(el => el.title).join(',');
      const existFilmTitle = data.exist.map(el => el.title).join(',');

      if (data.add.length) {
        dispatch(addFromFile(data.add));
        message.success(`Congratulation films ${addFilmTitle} add!`, 2.4);
      }

      if (data.exist.length) {
        message.warning(`Films ${existFilmTitle} already exist!`, 2.4);
      }

      dispatch(openCloseModal());
    }
  } catch (err) {
    message.error(err);
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

    if (res.status === 200) {
      dispatch(delFilm(itemId));
      message.success(data.message);
    } else {
      message.warning('Something went wrong!');
    }
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
