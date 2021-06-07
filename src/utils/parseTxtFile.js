import { message } from 'antd';
import { toCamelCase } from './toCamelCase';

export const parseTxtFile = str => {
  try {
    const films = str.split(/(?:\r\n\r\n)/g).filter(Boolean);

    const result = films.map(film => {
      const filmObj = film.split(/(?:\r\n)/g).reduce((acc, data) => {
        const [key, value] = data.split(': ');
        acc[toCamelCase(key)] = value;
        return acc;
      }, {});

      filmObj.stars = filmObj.stars.split(', ');
      return filmObj;
    });

    return result;
  } catch (err) {
    message.error('Some error');
  }
};
