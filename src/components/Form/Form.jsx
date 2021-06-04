import {
  Button,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import { Formik } from 'formik';
import { AddStarsInput } from '../AddStarsInput/AddStarsInput';
import { StarsBadge } from '../StarsBadge/StarsBadge';
import { connect } from 'react-redux';
import { addFilm } from '../../store/middleware/middleware';
import { validationSchema } from './validationSchema';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const paperStyle = {
  padding: 20,
  height: '100%',
  margin: '20px auto',
};

const radioValue = ['DVD', 'VHS', 'Blu-Ray'];

const initialValues = {
  title: '',
  format: '',
  releaseYear: '',
  stars: [],
};

export const Form = connect(null, { addFilm })(({ addFilm }) => {
  const classes = useStyles();

  const handleSubmit = values => {
    addFilm(values);
  };

  return (
    <Formik
      className={classes.root}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ values, errors, touched, handleSubmit, handleChange }) => (
        <Grid>
          <div style={paperStyle}>
            <Grid align='center'>
              <h2>Create Film</h2>
            </Grid>
            <form onSubmit={handleSubmit} className='film-form'>
              <TextField
                label='Title'
                placeholder='Title'
                name='title'
                type='text'
                value={values.title}
                onChange={handleChange}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
                fullWidth
              />
              <RadioGroup
                row
                aria-label='Format'
                name='format'
                value={values.format}
                onChange={handleChange}>
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
                name='releaseYear'
                type='number'
                min={1800}
                value={values.releaseYear}
                onChange={handleChange}
                error={touched.releaseYear && Boolean(errors.releaseYear)}
                helperText={touched.releaseYear && errors.releaseYear}
                fullWidth
              />

              {/* Something strange with star */}
              <StarsBadge stars={values.stars} />
              <AddStarsInput />

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
      )}
    </Formik>
  );
});
