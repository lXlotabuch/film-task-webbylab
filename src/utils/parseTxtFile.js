// I'm sure it could have been made easier, but I came up with just that )))

export const parseTxtFile = str => {
  arrayFromStr = str
    .replace(/Release Year:/g, 'releaseYear:')
    .replace(/(?:\\[rn]|[\r\n]+)+/g, ' ')
    .split(' ')
    .filter(Boolean);

  const result = [];
  let currentFilm = {};
  let key;
  let value = '';

  arrayFromStr.forEach((el, i) => {
    if (/([A-Z])\w+:/g.test(el)) {
      if (el !== 'releaseYear:') {
        el = el.slice(0, -1).toLowerCase();
      } else el = el.slice(0, -1);

      if (key) {
        if (currentFilm[el]) {
          currentFilm[key] =
            key === 'stars' ? value.trim().split(', ') : value.trim();

          result.push(currentFilm);

          currentFilm = {};
          value = '';
          key = el;
        } else {
          currentFilm[key] =
            key === 'stars' ? value.trim().split(', ') : value.trim();

          key = el;
          value = '';
        }
      } else {
        key = el;
      }
    } else {
      value += ` ${el}`;
      if (i === arrayFromStr.length - 1) {
        currentFilm[key] =
          key === 'stars' ? value.trim().split(', ') : value.trim();

        result.push(currentFilm);
      }
    }
  });
  return result;
};
