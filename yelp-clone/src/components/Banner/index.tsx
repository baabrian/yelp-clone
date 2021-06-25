import React from 'react';
import { useStyles } from './styles';
import { Grid, Button, Typography } from '@material-ui/core';

export const Banner: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.banner} container wrap='nowrap'>
      <Grid className={classes.bannerContent} item direction='column'>
        <Typography variant='h6'>Celebrate Pride!</Typography>
        <Typography>Support Open to all and LGBTQ-owned businesses</Typography>
        <Button className={classes.btnRed}>Find Open to all businesses</Button>
      </Grid>
      <Grid item>
        <img src='https://s3-media0.fl.yelpcdn.com/assets/public/pride_month_flag.yji-2ee60a28a3dd44454f16178674396700.png' />
      </Grid>
    </Grid>
  );
};
