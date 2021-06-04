const validName = /^[a-zа-яіїё ]+$/i;

export const validationStars = value => {
  if (!value.trim()) {
    return { isValid: false, error: "Stars can't be spaces" };
  }
  if (!validName.test(value)) {
    return { isValid: false, error: 'Incorrect format' };
  }
  return { isValid: true };
};
