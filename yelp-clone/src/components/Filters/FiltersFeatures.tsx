import React from 'react';
import { FormControl, FormGroup, FormControlLabel, FormLabel, Checkbox } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export const FiltersFeatures: React.FC = () => {
  const classes = useStyles();
  return (
    <FormControl component='fieldset'>
      <FormGroup>
        <FormLabel className={clsx(classes.fontBold, classes.colorDark)}>Features</FormLabel>
        <FormControlLabel control={<Checkbox />} label='Good for Lunch' />
        <FormControlLabel control={<Checkbox />} label='Good for Groups' />
        <FormControlLabel control={<Checkbox />} label='Good for Kids' />
        <FormControlLabel control={<Checkbox />} label='Has TV' />
      </FormGroup>
    </FormControl>
  );
};
