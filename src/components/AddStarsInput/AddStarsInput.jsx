import { Fab, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useField } from 'formik';
import { useRef } from 'react';
import { validationStars } from './validationStars';

export const AddStarsInput = () => {
  const input = useRef();
  const [, meta, helpers] = useField('stars');
  const { value, error, touched } = meta;
  const { setValue, setError, setTouched } = helpers;

  const handleClick = () => {
    const { isValid, error } = validationStars(input.current.value);
    if (isValid) {
      setValue([...value, input.current.value]);
      input.current.value = '';
    } else {
      setError(error);
    }
    setTouched(true, false);
  };

  const handleChange = () => {
    const { isValid, error } = validationStars(input.current.value);
    if (isValid) {
      setError();
    } else {
      setError(error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <TextField
        label='Stars'
        name='stars'
        placeholder='Stars'
        type='text'
        style={{ width: '90%' }}
        inputRef={input}
        error={touched && Boolean(error)}
        helperText={touched && error}
        onChange={handleChange}
      />
      <Fab
        size='small'
        style={{ alignSelf: 'flex-end', marginLeft: 10 }}
        color='primary'
        aria-label='add'
        onClick={handleClick}>
        <AddIcon />
      </Fab>
    </div>
  );
};
