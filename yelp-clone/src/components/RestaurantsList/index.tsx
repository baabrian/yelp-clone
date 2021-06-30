import React from 'react';
import { useStyles } from './styles';
import { Grid, Card, CardMedia, Typography, Button } from '@material-ui/core';

export const RestaurantsList: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Card>
        <Grid container>
          <Grid item container justify='space-between'>
            <Grid item>
              <Typography variant='h6'>1. Bench Mark</Typography>
              <Typography>$$ . American(new)</Typography>
            </Grid>
            <Grid item>
              <Typography>714-654-1889</Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Typography>Outging</Typography>
            <Typography>Delivery</Typography>
            <Typography>Takeout</Typography>
          </Grid>
          <Grid item>
            <Typography>
              “My husband and I have been eyeing this restaurant for quite some time and finally got reservation. It's above and beyond our
              expectations. We arrived at 6 and…” more
            </Typography>
          </Grid>

          <Grid item container justify='space-between' alignItems='center'>
            <Button>Start Order</Button>
            <Typography>Offers Takeout</Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
