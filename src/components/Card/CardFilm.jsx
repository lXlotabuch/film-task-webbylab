import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { connect } from 'react-redux';
import { deleteFilm } from '../../store/middleware/middleware';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: 300,
    minHeight: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    position: 'absolute',
    padding: 5,
    top: 0,
    right: 0,
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export const CardFilm = connect(null, { deleteFilm })(
  ({ itemId, title, releazeYear, format, stars, deleteFilm }) => {
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
              {releazeYear}
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
