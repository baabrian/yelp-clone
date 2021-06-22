import React from 'react';
import { useStyles } from './styles';
import { Container, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

export const FooterLanding: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.backgroundGray, classes.borderTop)}>
      <Container>
        <Grid className={classes.footerContent} container justify='space-evenly'>
          <Grid item direction='column'>
            <Typography variant='h6'>About</Typography>
            <Grid container direction='column'>
              <a href='#'>About Yelp</a>
              <a href='#'>Careers</a>
              <a href='#'>Press</a>
              <a href='#'>Investor Relations</a>
              <a href='#'>Trust & safety</a>
              <a href='#'>Content Guidelines</a>
              <a href='#'>Terms of Service</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Ad Choices</a>
            </Grid>
          </Grid>
          <Grid item direction='column'>
            <Typography variant='h6'>Discover</Typography>
            <Grid container direction='column'>
              <a href='#'>Yelp Project Cost Guides</a>
              <a href='#'>Collections</a>
              <a href='#'>Talk</a>
              <a href='#'>Events</a>
              <a href='#'>The Local Yelp</a>
              <a href='#'>Yelp Blog</a>
              <a href='#'>Support</a>
              <a href='#'>Yelp Mobile</a>
              <a href='#'>Developers</a>
              <a href='#'>RSS</a>
            </Grid>
          </Grid>
          <Grid item direction='column'>
            <Typography variant='h6'>Yelp for business</Typography>
            <Grid container direction='column'>
              <a href='#'>Claim your business Page</a>
              <a href='#'>Advertise on Yelp</a>
              <a href='#'>Yelp for Restaurant Owners</a>
              <a href='#'>Table Management</a>
              <a href='#'>Business Success Stories</a>
              <a href='#'>Business Support</a>
              <a href='#'>Yelp Blog for Business</a>
            </Grid>
          </Grid>
          <Grid item direction='column'>
            <Typography variant='h6'>Languages</Typography>
            <Grid container>
              <Grid container direction='column'>
                <a href='#'>English</a>
              </Grid>
            </Grid>
            <Typography variant='h6'>Countries</Typography>
            <Grid container direction='column'>
              <a href='#'>United States</a>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.yelpFooterImage}></div>
      </Container>
    </div>
  );
};
