import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resultsContent: {
      '& > *': {
        padding: '0 3em',
        '&:nth-child(2)': {
          padding: '2em',
        },
      },
    },
  }),
);
