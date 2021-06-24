import React from 'react';
import { NavBar } from '../../components/Navbar';
import { SearchRestaurants } from '../../components/SearchRestaurants';
import { useStyles } from './styles';

export const Restaurants: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.restaurants}>
      <NavBar />
      <SearchRestaurants />
    </div>
  );
};
