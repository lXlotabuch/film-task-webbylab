import { Typography } from '@material-ui/core';
import React from 'react';

export const NoFilms = () => {
  return (
    <div
      style={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography variant='h4' color='textSecondary'>
        Sorry, no films for you!
      </Typography>
    </div>
  );
};
