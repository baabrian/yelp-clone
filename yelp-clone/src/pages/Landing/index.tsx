import React from 'react';
import { Hero } from '../../components/Hero';
import { BestBusiness } from '../../components/BestBusiness';
import { Location } from '../../components/Location';
import { HotAndNew } from '../../components/Hot&New';
import { BusinessCategories } from '../../components/BusinessCategories';
import { YelpMobileApps } from '../../components/YelpMobileApps';
import { RecentCollections } from '../../components/RecentCollections';
import { useStyles } from './styles';

export const Landing: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.lading}>
      <Hero />
      <BestBusiness />
      <Location />
      <HotAndNew />
      <RecentCollections />
      <BusinessCategories />
      <YelpMobileApps />
    </div>
  );
};
