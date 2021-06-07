// I'm sure it could have been made easier, but I came up with just that )))

import { message } from 'antd';

export const parseTxtFile = str => {
  try {
    const films = str
      .replace(/Release Year:/g, 'releaseYear:')
      .split(/(?:\r\n)/g)
      .filter(Boolean);

    const result = [];
    let currentFilm = {};

    films.forEach((film, i) => {
      const [key, value] = film.split(': ');
      const currentKey = key === 'releaseYear' ? key : key.toLowerCase();

      if (i + 1 === films.length) {
        currentFilm[currentKey] = currentKey === 'stars' ? value : value.trim();
      }

      if (currentFilm[currentKey]) {
        result.push(currentFilm);
        currentFilm = {};
        currentFilm[currentKey] = currentKey === 'stars' ? value : value.trim();
      } else {
        currentFilm[currentKey] = currentKey === 'stars' ? value : value.trim();
      }
    });

    return result;
  } catch (err) {
    message.error('Some error');
  }
};
