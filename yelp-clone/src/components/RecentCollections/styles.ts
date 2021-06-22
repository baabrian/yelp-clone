import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    allCollections: {
      '& h6': {
        padding: '1.5em 0',
        fontWeight: 700,
        color: '#d32323',
      },
      '& p': {
        fontSize: '15px',
      },
      '& a': {
        textDecoration: 'none',
        color: '#0073bb',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
    light: {
      color: '#999999',
    },
    fontHeavy: {
      fontWeight: 700,
    },
    recentCollectionCol: {
      flex: 1,
      margin: '10px',
    },
    recentCollectionsContainer: {
      '& > *': {
        padding: '10px',
        marginBottom: '10px',
        borderBottom: '1px solid #e6e6e6',
        '&:last-child': {
          borderBottom: 0,
          marginBottom: 0,
        },
      },
    },
    collections: {
      border: '1px solid #e6e6e6e6',
    },
    avatar: {
      height: '4em',
      width: '4em',
      marginRight: '6px',
    },
  }),
);
