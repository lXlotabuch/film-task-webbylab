import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { CardFilm } from '../Card/CardFilm';
import { selectFilms, selectIsLoading } from '../../store/reducer/reducer';
import { connect } from 'react-redux';
import { getFilms } from '../../store/middleware/middleware';
import { NoFilms } from '../NoFilms/NoFilms';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

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
    console.log(isLoading);

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
        {films.map((film, i) => (
          <CardFilm key={i} {...film} />
        ))}
      </Grid>
    );
  },
);
