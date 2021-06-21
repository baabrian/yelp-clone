import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    businessCards: {
      paddingBottom: '2em',
    },
    business: {
      backgroundColor: '#f5f5f5',
      '& h6': {
        padding: '1.5em 0',
        fontWeight: 700,
        color: '#d32323',
      },
      '& h5': {
        padding: '6px 0',
        fontWeight: 700,
        fontSize: '1.5em',
      },
    },
    cardContainer: {
      maxWidth: '25em',
    },
    card: {
      cursor: 'pointer',
      border: '1px solid #e6e6e6',
      boxShadow: 'none',
      '&:hover': {
        color: '#0073bb',
        boxShadow: '0 6px 12px rgb(0 0 0 / 10%)',
      },
    },
    cardMedia: {
      height: '20em',
      width: '25em',
    },
  }),
);
