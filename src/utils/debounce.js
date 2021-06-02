export const debounce = (func, time) => {
  let timer;
  return (...arg) => {
    const later = () => {
      clearTimeout(timer);
      func(...arg);
    };

    clearTimeout(timer);
    timer = setTimeout(later, time);
  };
};
