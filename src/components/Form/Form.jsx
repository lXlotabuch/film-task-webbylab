import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useState } from 'react';
import { AddStarsInput } from '../AddStarsInput/AddStarsInput';
import { StarsBadge } from '../StarsBadge/StarsBadge';
import { connect } from 'react-redux';
import { addFilm } from '../../store/middleware/middleware';
import { validationSchema } from './validateSchema';

const paperStyle = {
  padding: 20,
  height: '100%',
  margin: '20px auto',
};

const radioValue = ['DVD', 'VHS', 'Blu-Ray'];

export const Form = connect(null, { addFilm })(({ addFilm }) => {
  const [stars, setStars] = useState([]);

  const handleSubmit = values => {
    if (stars.length === 0) {
      return;
    }

    const film = { ...values, stars };

    addFilm(film);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      format: '',
      releazeYear: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Grid>
      <div style={paperStyle}>
        <Grid align='center'>
          <h2>Create Film</h2>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label='Title'
            placeholder='Title'
            name='title'
            type='text'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            fullWidth
          />
          <RadioGroup
            row
            aria-label='Format'
            name='format'
            value={formik.values.format}
            onChange={formik.handleChange}>
            {radioValue.map(el => (
              <FormControlLabel
                key={el}
                value={el}
                control={<Radio required />}
                label={el}
              />
            ))}
          </RadioGroup>
          <TextField
            label='Releaze year'
            name='releazeYear'
            type='number'
            value={formik.values.releazeYear}
            onChange={formik.handleChange}
            error={
              formik.touched.releazeYear && Boolean(formik.errors.releazeYear)
            }
            helperText={formik.touched.releazeYear && formik.errors.releazeYear}
            fullWidth
          />

          {/* Something strange with star */}
          <StarsBadge stars={stars} />
          <AddStarsInput stars={stars} setStars={setStars} />

          <Button
            type='submite'
            color='primary'
            variant='contained'
            style={{ margin: '8px 0' }}>
            Create Film
          </Button>
        </form>
      </div>
    </Grid>
  );
});
