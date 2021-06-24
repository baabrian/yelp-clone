import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { FormControl, FormControlLabel, FormLabel, Radio, FormGroup } from '@material-ui/core';

export const FiltersDistance: React.FC = () => {
  const classes = useStyles();
  return (
    <FormControl component='fieldset'>
      <FormGroup>
        <FormLabel className={clsx(classes.fontBold, classes.colorDark)}>Gender</FormLabel>
        <FormControlLabel control={<Radio />} label='Female' />
        <FormControlLabel control={<Radio />} label='Male' />
        <FormControlLabel control={<Radio />} label='Other' />
      </FormGroup>
    </FormControl>
  );
};
