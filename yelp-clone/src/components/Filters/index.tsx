import React from 'react';
import { useStyles } from './styles';
import { Grid } from '@material-ui/core';
import { FiltersDistance } from './FiltersDistance';
import { FiltersFeatures } from './FiltersFeatures';
import { FiltersSuggestion } from './FiltersSuggestion';
import { FiltersPrice } from './FiltersPrice';

export const Filters: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.filtersGroup} container direction='column'>
      <FiltersPrice />
      <FiltersSuggestion />
      <FiltersFeatures />
      <FiltersDistance />
    </Grid>
  );
};
