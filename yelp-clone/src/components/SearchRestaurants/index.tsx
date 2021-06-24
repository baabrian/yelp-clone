import React from 'react';
import { Grid } from '@material-ui/core';
import { Filters } from '../Filters';

export const SearchRestaurants: React.FC = () => {
  return (
    <Grid container>
      <Grid item>
        <Filters />
      </Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
};
