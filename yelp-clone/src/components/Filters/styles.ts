import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    fontBold: {
      fontWeight: 700,
    },
    colorDark: {
      color: '#2b273c',
    },
    filtersGroup: {
      '& > *': {
        padding: '2em',
        marginBottom: '1em',
        '&:not(:last-child)': {
          borderBottom: '1px solid #e6e6e6',
        },
      },
    },
  }),
);
