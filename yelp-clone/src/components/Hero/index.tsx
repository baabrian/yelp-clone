import React from 'react';
import { Container, AppBar, Grid, Button, TextField, InputAdornment, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
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
            <Grid container>
              <Grid item xs={6}>
                <Autocomplete
                  options={['dwadwadwad']}
                  id='free-solo-demo'
                  freeSolo
                  renderInput={params => (
                    <TextField
                      className={classes.input}
                      style={{ borderRadius: '3px 0 0 3px' }}
                      {...params}
                      placeholder='plumbers, delivery, takeout'
                      InputProps={{
                        style: { borderRight: '1px solid #ccc' },
                        disableUnderline: true,
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Typography className={classes.inputLabel}>Find</Typography>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Grid item container direction="row" >
                  <Autocomplete
                  style={{flex:1}}
                    options={['dwadwadwad']}
                    id='free-solo-demo'
                    freeSolo
                    renderInput={params => (
                      <TextField
                        className={classes.input}
                        {...params}
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <InputAdornment position='start'>
                              <Typography className={classes.inputLabel}>Near</Typography>
                            </InputAdornment>
                          ),
                          // endAdornment: (
                          //   <Button disableRipple className={classes.searchBtn}>
                          //     <SearchIcon />
                          //   </Button>
                          // ),
                        }}
                      />
                    )}
                  />
                  <Button disableRipple className={classes.searchBtn}>
                    <SearchIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};
