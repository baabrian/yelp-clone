import React from 'react';
import { useStyles } from './styles';
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';

export const FiltersPrice = () => {
  const classes = useStyles();
  return (
    <Grid container direction='column'>
      <Typography className={classes.fontBold}>Filters</Typography>
      <ButtonGroup size='small'>
        <Button>$</Button>
        <Button>$$</Button>
        <Button>$$$</Button>
        <Button>$$$$</Button>
      </ButtonGroup>
    </Grid>
  );
};
