import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { useStyles } from './materialStyle';

import { connect } from 'react-redux';
import { selectFilms, selectIsLoading } from '../../store/reducer/reducer';
import { getFilms } from '../../store/middleware/middleware';

import { FilmCard } from '../FilmCard/FilmCard';
import { NoFilms } from '../NoFilms/NoFilms';

const mapStateToProps = state => ({
  films: selectFilms(state),
  isLoading: selectIsLoading(state),
});

export const CardPage = connect(mapStateToProps, { getFilms })(
  ({ isLoading, films, getFilms }) => {
    const classes = useStyles();
    useEffect(() => {
      getFilms();
    }, [getFilms]);

    if (isLoading) {
      return (
        <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>
      );
    }

    if (!films.length) {
      return <NoFilms />;
    }

    return (
      <Grid
        style={{ padding: 30, margin: -16 }}
        container
        spacing={2}
        direction='row'
        justify='center'
        alignItems='center'>
        {films.map(film => (
          <FilmCard key={film.itemId} {...film} />
        ))}
      </Grid>
    );
  },
);
