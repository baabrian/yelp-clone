import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const Location: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.locationContainer}>
      <Typography align='center' variant='h5'>
        Yelp Irvine
      </Typography>
      <Grid className={classes.locationNavs} container justify='center'>
        <a href='#'>San Francisco</a>
        <a href='#'>New York</a>
        <a href='#'>San Jose</a>
        <a href='#'>Austin</a>
        <a href='#'>Los Angeles</a>
      </Grid>
    </Container>
  );
};
