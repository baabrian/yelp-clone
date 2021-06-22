import React from 'react';
import { Container, AppBar, Grid, Button, Typography } from '@material-ui/core';
import { SearchBar } from '../SearchBar';

import { useStyles } from './styles';

export const Hero: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Container fixed>
        <AppBar className={classes.heroNavBar} position='static'>
          <Grid container direction='row'>
            <Grid item container justify='space-between' direction='row'>
              <Grid item className={classes.heroNavs}>
                <a href='#'>Write a review</a>
                <a href='#'>Events</a>
                <a href='#'>Talk</a>
              </Grid>
              <Grid item>
                <a href='#' style={{ marginRight: '1em' }}>
                  Log in
                </a>
                <Button classes={{ root: classes.heroSignUpBtn }} disableRipple variant='outlined'>
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>

        <div>
          <Grid container style={{ paddingTop: '8em' }}>
            <Grid item container justify='center'>
              <a className={classes.heroYelpLogo} href='#'></a>
            </Grid>
          </Grid>
          <div style={{ paddingTop: '4em' }}>
            <SearchBar />
          </div>
          <Grid className={classes.categories} container justify='center'>
            <div>
              <a href='#'>Plumbers</a>
            </div>
            <div>
              <a href='#'>Restaurants</a>
            </div>
            <div>
              <a href='#'>Home Services</a>
            </div>
            <div>
              <a href='#'>Delivery</a>
            </div>
            <div>
              <a href='#'>Black Owned</a>
            </div>
          </Grid>
          <Grid className={classes.creatorInfo} container alignItems='center' direction='column'>
            <a href='#'>60 Beans and Kitchen & Cofee</a>
            <Typography>
              Photo by <a href='#'>Bardley H</a>
            </Typography>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
