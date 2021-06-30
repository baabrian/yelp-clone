import React from 'react';
import { useStyles } from './styles';
import { Grid, Typography, Button } from '@material-ui/core';

export const BestRestaurants: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid>
      <span>
        <a href='#'>Santa Ana</a> {'>'} <a href='#'>Restaurants</a>
      </span>
      <Grid container justify='space-between' alignItems='center'>
        <Typography variant='h4'>The best Restaurants in Irvine CA</Typography>
        <Typography>
          Sort: <span className={classes.fontBold}>Restaurants</span>
        </Typography>
      </Grid>
      <Grid container>
        <Button variant='outlined'>Delivery</Button>
        <Button variant='outlined'>Takeout</Button>
      </Grid>
      <Typography className={classes.fontBold}>Sponsored Results</Typography>
      <Typography className={classes.fontBold}>All Results</Typography>
    </Grid>
  );
};
