import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    restaurants: {
      height: '100vh',
      width: '100vw',
    },
  }),
);
