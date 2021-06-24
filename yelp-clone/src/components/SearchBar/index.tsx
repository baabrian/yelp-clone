import React from 'react';
import { Grid, Button, TextField, InputAdornment, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.searchBar}>
      <Grid item xs={6}>
        <Autocomplete
          freeSolo
          options={['Restaurants', 'Delivery', 'Takeout', 'Accountant', 'Plumbers']}
          getOptionLabel={option => option}
          renderInput={params => (
            <TextField
              className={classes.input}
              style={{ borderRadius: '3px 0 0 3px' }}
              {...params}
              placeholder='plumbers, delivery, takeout'
              InputProps={{
                ...params.InputProps,
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
        <Grid item container direction='row'>
          <Autocomplete
            style={{ flex: 1 }}
            options={['Costa Mesa']}
            getOptionLabel={option => option}
            id='free-solo-demo'
            freeSolo
            renderInput={params => (
              <TextField
                className={classes.input}
                {...params}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Typography className={classes.inputLabel}>Near</Typography>
                    </InputAdornment>
                  ),
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
  );
};
