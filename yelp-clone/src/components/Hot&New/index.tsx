import React from 'react';
import { useStyles } from './styles';
import { Container, Typography, Grid, Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Rating } from '@material-ui/lab';

export const HotAndNew: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.newBusinessesContainer}>
      <Typography variant='h5' align='center'>
        Hot & New Businesses
      </Typography>
      <Grid container spacing={3} justify='center' style={{ padding: '3em 0' }}>
        <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.cardMedia} image='https://s3-media0.fl.yelpcdn.com/bphoto/ZaEu9zKutUsTKXdKRNtmYg/l.jpg' />
            </CardActionArea>
            <CardContent className={classes.cardContent}>
              <Typography variant='h6'>
                <a href='#'>Mutts</a>
              </Typography>
              <Typography style={{ display: 'flex' }}>
                <Rating
                  style={{ marginRight: '4px', fontSize: '1.5em' }}
                  name='customized-empty'
                  defaultValue={3.5}
                  precision={0.5}
                  readOnly
                  emptyIcon={<StarBorderIcon fontSize='inherit' />}
                />
                <span className={classes.review}>47 reviews</span>
              </Typography>
              <Typography>Breakfast & Brnunch, Pizza, Sandwiches</Typography>
              <Typography>Newport Beach, CA</Typography>
              <Typography className={classes.openData}>Opened 8 weeks ago</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.cardMedia} image='https://s3-media0.fl.yelpcdn.com/bphoto/ZaEu9zKutUsTKXdKRNtmYg/l.jpg' />
            </CardActionArea>
            <CardContent className={classes.cardContent}>
              <Typography variant='h6'>
                <a href='#'>Mutts</a>
              </Typography>
              <Typography style={{ display: 'flex' }}>
                <Rating
                  style={{ marginRight: '4px', fontSize: '1.5em' }}
                  name='customized-empty'
                  defaultValue={3.5}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize='inherit' />}
                />
                <span className={classes.review}>47 reviews</span>
              </Typography>
              <Typography>Breakfast & Brnunch, Pizza, Sandwiches</Typography>
              <Typography>Newport Beach, CA</Typography>
              <Typography className={classes.openData}>Opened 8 weeks ago</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.cardContainer} item container justify='center' md={3} sm={6} xs={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.cardMedia} image='https://s3-media0.fl.yelpcdn.com/bphoto/ZaEu9zKutUsTKXdKRNtmYg/l.jpg' />
            </CardActionArea>
            <CardContent className={classes.cardContent}>
              <Typography variant='h6'>
                <a href='#'>Mutts</a>
              </Typography>
              <Typography style={{ display: 'flex' }}>
                <Rating
                  style={{ marginRight: '4px', fontSize: '1.5em' }}
                  name='customized-empty'
                  defaultValue={3.5}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize='inherit' />}
                />
                <span className={classes.review}>47 reviews</span>
              </Typography>
              <Typography>Breakfast & Brnunch, Pizza, Sandwiches</Typography>
              <Typography>Newport Beach, CA</Typography>
              <Typography className={classes.openData}>Opened 8 weeks ago</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
