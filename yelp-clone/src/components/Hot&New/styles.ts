import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    newBusinessesContainer: {
      '& h5': {
        fontSize: '1.6em',
        paddingTop: '3em',
        paddingBottom: '9px',
        fontWeight: 700,
        color: '#d32323',
      },
    },
    cardContainer: {
      maxWidth: '30em',
    },
    card: {
      boxShadow: 'none',
      border: '1px solid #ccc',
    },
    cardMedia: {
      height: '15em',
      backgroundSize: 'cover',
    },
    cardContent: {
      '& a': {
        textDecoration: 'none',
        color: '#0073bb',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '& p': {
        fontSize: '12px',
        padding: '2px 0',
      },
    },
    review: {
      color: '#666',
    },
    openData: {
      color: '#f15c00',
    },
  }),
);
