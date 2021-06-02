import { Fab, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useRef } from 'react';

export const AddStarsInput = ({ stars, setStars }) => {
  const input = useRef();

  const handleClick = () => {
    setStars(prev => [...prev, input.current.value]);
    input.current.value = '';
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
