import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

export const BestRestaurants: React.FC = () => {
  return (
    <Grid>
      <Typography>Irvine {'>'} Restaurants</Typography>
      <Grid container justify='space-between'>
        <Typography variant='h4'>The best Restaurants in Irvine CA</Typography>
        <Typography>Sort:Reccomended</Typography>
      </Grid>
      <Grid container>
        <Button>Delivery</Button>
        <Button>Takeout</Button>
      </Grid>
      <Typography>Sponsored Results</Typography>
      <Typography>All Results</Typography>
    </Grid>
  );
};
