import React from 'react';
import { useStyles } from './styles';
import { Typography, Grid, FormControl, FormGroup, FormControlLabel, Checkbox, FormLabel } from '@material-ui/core';
import clsx from 'clsx';

export const FiltersSuggestion = () => {
  const classes = useStyles();
  return (
    <Grid container direction='column'>
      <FormControl component='fieldset'>
        <FormLabel className={clsx(classes.fontBold, classes.colorDark)}>Suggested</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label='Open Now' />
          <FormControlLabel control={<Checkbox />} label='Yelp Delivery' />
          <FormControlLabel control={<Checkbox />} label='Yelp Takeout' />
        </FormGroup>
      </FormControl>
    </Grid>
  );
};
