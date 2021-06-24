import { SearchBar } from '../SearchBar';
import { useStyles } from './styles';
import { useTheme } from '@material-ui/core';
import { Grid, AppBar, Button, useMediaQuery, Typography } from '@material-ui/core';
import React from 'react';

export const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isLapTop = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar position='sticky' className={classes.navBar}>
      <Grid container justify='space-between' wrap='nowrap'>
        <Grid item style={{ display: 'flex' }}>
          <a className={classes.yelpLogo} href='#'></a>
        </Grid>
        <Grid className={classes.searchBarItem} item direction='column'>
          <Grid item>
            <SearchBar />
          </Grid>
          <Grid container className={classes.services}>
            <Grid item>
              <Typography>Restaurants</Typography>
            </Grid>
            <Grid item>
              <Typography>Home Services</Typography>
            </Grid>
            <Grid item>
              <Typography>Auto Services</Typography>
            </Grid>
            <Grid item>
              <Typography>More</Typography>
            </Grid>
          </Grid>
        </Grid>
        {!isLapTop ? (
          <Grid item wrap='nowrap' className={classes.navBarBtnGroups}>
            <>
              <Button disableTouchRipple>For Businesses</Button>
              <Button disableTouchRipple>Write a Review</Button>
              <Button variant='outlined' disableTouchRipple>
                Login
              </Button>
              <Button className={classes.btnRed} variant='outlined' disableTouchRipple>
                Sign Up
              </Button>
            </>
          </Grid>
        ) : null}
      </Grid>
    </AppBar>
  );
};
