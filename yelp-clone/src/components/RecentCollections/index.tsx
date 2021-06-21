import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

export const RecentCollections: React.FC = () => {
  return (
    <Container>
      <Typography variant='h6' align='center'>
        Recent Collections
      </Typography>
      <Grid container direction='row'>
        <Grid item direction='column' style={{ flexBasis: '50%' }}>
          <Grid container wrap='nowrap'>
            <Grid item>image</Grid>
            <Grid item container direction='column'>
              <Typography>Oc Food</Typography>
              <Typography>7 places by Stephan F.</Typography>
            </Grid>
          </Grid>
          <Grid container wrap='nowrap'>
            <Grid item>image</Grid>
            <Grid item container direction='column'>
              <Typography>Oc Food</Typography>
              <Typography>7 places by Stephan F.</Typography>
            </Grid>
          </Grid>
          <Grid container wrap='nowrap'>
            <Grid item>image</Grid>
            <Grid item container direction='column'>
              <Typography>Oc Food</Typography>
              <Typography>7 places by Stephan F.</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item direction='column' style={{ flexBasis: '50%' }}>
          <Grid container wrap='nowrap'>
            <Grid item>image</Grid>
            <Grid item container direction='column'>
              <Typography>Oc Food</Typography>
              <Typography>7 places by Stephan F.</Typography>
            </Grid>
          </Grid>
          <Grid container wrap='nowrap'>
            <Grid item>image</Grid>
            <Grid item container direction='column'>
              <Typography>Oc Food</Typography>
              <Typography>7 places by Stephan F.</Typography>
            </Grid>
          </Grid>
          <Grid container wrap='nowrap'>
            <Grid item>image</Grid>
            <Grid item container direction='column'>
              <Typography>Oc Food</Typography>
              <Typography>7 places by Stephan F.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
