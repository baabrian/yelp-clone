import React from 'react';
import { useStyles } from './styles';
import { Container, Grid, Typography, Avatar } from '@material-ui/core';
import clsx from 'clsx';

export const RecentCollections: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.allCollections}>
      <Typography variant='h6' align='center'>
        Recent Collections
      </Typography>
      <Grid className={classes.collections} container direction='row'>
        <Grid className={clsx(classes.recentCollectionsContainer, classes.recentCollectionCol)} item direction='column'>
          <Grid container wrap='nowrap'>
            <Grid item>
              <a href='#'>
                <Avatar
                  className={classes.avatar}
                  variant='rounded'
                  src='https://s3-media0.fl.yelpcdn.com/bphoto/ZwQ-K8QhMdggSWQv-eMlgw/120s.jpg'
                />
              </a>
            </Grid>
            <Grid item container justify={'space-evenly'} direction='column'>
              <Typography>
                <a className={classes.fontHeavy} href='#'>
                  OC Food
                </a>
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography className={classes.light}>
                7 places by{' '}
                <span>
                  <a href='#'>Stephan F</a>
                </span>
              </Typography>
            </Grid>
          </Grid>
          <Grid container wrap='nowrap'>
            <Grid item>
              <a href='#'>
                <Avatar
                  className={classes.avatar}
                  variant='rounded'
                  src='https://s3-media0.fl.yelpcdn.com/bphoto/ZwQ-K8QhMdggSWQv-eMlgw/120s.jpg'
                />
              </a>
            </Grid>
            <Grid item container justify={'space-evenly'} direction='column'>
              <Typography>
                <a className={classes.fontHeavy} href='#'>
                  OC Food
                </a>
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography className={classes.light}>
                7 places by{' '}
                <span>
                  <a href='#'>Stephan F</a>
                </span>
              </Typography>
            </Grid>
          </Grid>
          <Grid container wrap='nowrap'>
            <Grid item>
              <a href='#'>
                <Avatar
                  className={classes.avatar}
                  variant='rounded'
                  src='https://s3-media0.fl.yelpcdn.com/bphoto/ZwQ-K8QhMdggSWQv-eMlgw/120s.jpg'
                />
              </a>
            </Grid>
            <Grid item container justify={'space-evenly'} direction='column'>
              <Typography>
                <a className={classes.fontHeavy} href='#'>
                  OC Food
                </a>
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography className={classes.light}>
                7 places by{' '}
                <span>
                  <a href='#'>Stephan F</a>
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={clsx(classes.recentCollectionsContainer, classes.recentCollectionCol)} item direction='column'>
          <Grid container wrap='nowrap'>
            <Grid item>
              <a href='#'>
                <Avatar
                  className={classes.avatar}
                  variant='rounded'
                  src='https://s3-media0.fl.yelpcdn.com/bphoto/ZwQ-K8QhMdggSWQv-eMlgw/120s.jpg'
                />
              </a>
            </Grid>
            <Grid item container justify={'space-evenly'} direction='column'>
              <Typography>
                <a className={classes.fontHeavy} href='#'>
                  OC Food
                </a>
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography className={classes.light}>
                7 places by{' '}
                <span>
                  <a href='#'>Stephan F</a>
                </span>
              </Typography>
            </Grid>
          </Grid>
          <Grid container wrap='nowrap'>
            <Grid item>
              <a href='#'>
                <Avatar
                  className={classes.avatar}
                  variant='rounded'
                  src='https://s3-media0.fl.yelpcdn.com/bphoto/ZwQ-K8QhMdggSWQv-eMlgw/120s.jpg'
                />
              </a>
            </Grid>
            <Grid item container justify={'space-evenly'} direction='column'>
              <Typography>
                <a className={classes.fontHeavy} href='#'>
                  OC Food
                </a>
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography className={classes.light}>
                7 places by{' '}
                <span>
                  <a href='#'>Stephan F</a>
                </span>
              </Typography>
            </Grid>
          </Grid>
          <Grid container wrap='nowrap'>
            <Grid item>
              <a href='#'>
                <Avatar
                  className={classes.avatar}
                  variant='rounded'
                  src='https://s3-media0.fl.yelpcdn.com/bphoto/ZwQ-K8QhMdggSWQv-eMlgw/120s.jpg'
                />
              </a>
            </Grid>
            <Grid item container justify={'space-evenly'} direction='column'>
              <Typography>
                <a className={classes.fontHeavy} href='#'>
                  OC Food
                </a>
              </Typography>
              <Typography>&nbsp;</Typography>
              <Typography className={classes.light}>
                7 places by{' '}
                <span>
                  <a href='#'>Stephan F</a>
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
