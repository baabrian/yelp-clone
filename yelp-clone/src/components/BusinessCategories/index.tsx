import React from 'react';
import { Container, Grid, Card, Typography, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { useStyles } from './styles';

export const BusinessCategories: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundGray}>
      <Container className={classes.businessCategoriesContainer}>
        <Typography align='center' variant='h6'>
          Browse Businesses By Category
        </Typography>
        <Grid container spacing={3} justify='center'>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardActionArea disableRipple className={classes.cardAction}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png'
                />

                <Typography>Restaurants</Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardActionArea disableRipple className={classes.cardAction}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png'
                />

                <Typography>Restaurants</Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardActionArea disableRipple className={classes.cardAction}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png'
                />

                <Typography>Restaurants</Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardActionArea disableRipple className={classes.cardAction}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png'
                />

                <Typography>Restaurants</Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardActionArea disableRipple className={classes.cardAction}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png'
                />

                <Typography>Restaurants</Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardActionArea disableRipple className={classes.cardAction}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png'
                />

                <Typography>Restaurants</Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardActionArea disableRipple className={classes.cardAction}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png'
                />

                <Typography>Restaurants</Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
            <Card className={classes.card}>
              <CardActionArea disableRipple className={classes.cardAction}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png'
                />

                <Typography>Restaurants</Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
