import React from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { useStyles } from './styles';

export const YelpMobileApps: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.businessCategoriesContainer}>
      <Typography align='center' variant='h6'>
        Yelp Mobile Apps
      </Typography>
      <Grid container spacing={3} justify='center'>
        <Grid className={classes.cardContainer} item container justify='center' sm={6} xs={12}>
          <Card className={classes.card}>
            <CardActionArea disableRipple className={classes.cardAction}>
            <Typography className={classes.cardTitle}>Iphone, Ipad, and Watch</Typography>
              <CardMedia
                className={classes.cardMedia}
                image='https://s3-media0.fl.yelpcdn.com/assets/public/pitch_ios.yji-960cce5c1917bdabc568aa735f2d866f.png'
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid className={classes.cardContainer} item container justify='center' sm={6} xs={12}>
          <Card className={classes.card}>
            <CardActionArea disableRipple className={classes.cardAction}>
            <Typography className={classes.cardTitle}>Android</Typography>
              <CardMedia
                className={classes.cardMedia}
                image='https://s3-media0.fl.yelpcdn.com/assets/public/pitch_android.yji-a91a4a087787b1aa9aa729e3de5743d7.png'
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
