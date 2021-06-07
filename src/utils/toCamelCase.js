export const toCamelCase = key => {
  const words = key.toLowerCase().split(' ');

  const camelCaseWords = words.map((word, i) => {
    if (i === 0) {
      return word;
    }
    return word[0].toUpperCase() + word.slice(1);
  });

  return camelCaseWords.join('');
};
