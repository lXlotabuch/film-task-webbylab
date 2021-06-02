import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { CardFilm } from '../Card/CardFilm';
import { selectFilms } from '../../store/reducer/reducer';
import { connect } from 'react-redux';
import { getFilms } from '../../store/middleware/middleware';

const mapStateToProps = state => ({
  films: selectFilms(state),
});

export const CardPage = connect(mapStateToProps, { getFilms })(
  ({ films, getFilms }) => {
    useEffect(() => {
      getFilms();
    }, [getFilms]);

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
