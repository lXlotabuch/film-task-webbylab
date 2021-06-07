import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useStyles } from './materialStyles';
import { connect } from 'react-redux';
import { deleteFilm } from '../../store/middleware/middleware';

export const FilmCard = connect(null, { deleteFilm })(
  ({ itemId, title, releaseYear, format, stars, deleteFilm }) => {
    const classes = useStyles();

    const handleClick = () => {
      deleteFilm({ itemId });
    };

    return (
      <Grid item>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom>
              {title}
            </Typography>
            <Typography variant='h5' component='h2'>
              {releaseYear}
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              {format}
            </Typography>
            <Typography variant='body2' component='p'>
              {stars.join(',')}
            </Typography>
            <HighlightOffIcon className={classes.icon} onClick={handleClick} />
          </CardContent>
        </Card>
      </Grid>
    );
  },
);
