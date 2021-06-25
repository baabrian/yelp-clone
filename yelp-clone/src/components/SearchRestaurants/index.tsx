import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Filters } from '../Filters';
import { Banner } from '../Banner';
import { useStyles } from './styles';
import { BestRestaurants } from '../BestRestaurants';
import { RestaurantsList } from '../RestaurantsList';

export const SearchRestaurants: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container wrap='nowrap'>
      <Grid>
        <Grid className={classes.resultsContent} container wrap='nowrap' style={{ position: 'sticky' }}>
          <Grid item>
            <Filters />
          </Grid>
          <Grid item>
            <Banner />
            <BestRestaurants />
            <RestaurantsList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
