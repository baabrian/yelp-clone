import React from 'react';
import { useStyles } from './styles';
import { Container, Card, Typography, Grid, CardMedia } from '@material-ui/core';

export const BestBusiness: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.business}>
      <Container>
        <Typography align='center' variant='h6'>
          Find the Best Businesses in Town
        </Typography>
        <Grid className={classes.businessCards} container spacing={3} justify='center'>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image='https://s3-media0.fl.yelpcdn.com/assets/public/hotels@2x.yji-c49912c5d2a5bd098a87a5ebcf038fb2.jpg'
              />
              <Typography variant='h5' align='center'>
                Hotels
              </Typography>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image='https://s3-media0.fl.yelpcdn.com/assets/public/hotels@2x.yji-c49912c5d2a5bd098a87a5ebcf038fb2.jpg'
              />
              <Typography variant='h5' align='center'>
                Hotels
              </Typography>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image='https://s3-media0.fl.yelpcdn.com/assets/public/hotels@2x.yji-c49912c5d2a5bd098a87a5ebcf038fb2.jpg'
              />
              <Typography variant='h5' align='center'>
                Hotels
              </Typography>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image='https://s3-media0.fl.yelpcdn.com/assets/public/hotels@2x.yji-c49912c5d2a5bd098a87a5ebcf038fb2.jpg'
              />
              <Typography variant='h5' align='center'>
                Hotels
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
