import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundGray: {
      backgroundColor: '#f5f5f5',
    },
    businessCategoriesContainer: {
      '& h6': {
        padding: '1.5em 0',
        fontWeight: 700,
        color: '#d32323',
        marginTop: '4em',
      },
    },

    cards: {
      padding: '2em',
    },
    cardContainer: {
      height: '17em',
    },
    card: {
      height: '100%',
      width: '100%',
      boxShadow: 'none',
      border: '1px solid #ccc',
      '&:hover': {
        backgroundColor: '#fff',
        borderColor: '#0073bb',
        color: '#0073bb',
        boxShadow: '0 6px 12px rgb(0 0 0 / 10%)',
      },
    },
    cardAction: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      height: '72px',
      width: '72px',
    },
  }),
);
