import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navBar: {
      padding: '3em 3em 0 3em',
      backgroundColor: '#fff',
      borderBottom: '1px solid #e6e6e6',
      boxShadow: 'none',
      color: 'rgba(43,39,60,1)',
    },
    btnRed: {
      backgroundColor: '#d32323',
      color: '#fff',
      border: 'none',
      '&:hover': { backgroundColor: '#f40d15' },
    },
    navBarBtnGroups: {
      '& > *': {
        fontWeight: 600,
        textTransform: 'none',
        marginRight: '5px',
        '&:last-child': {
          margin: 0,
        },
      },
    },
    yelpLogo: {
      backgroundImage: 'url(https://s3-media0.fl.yelpcdn.com/assets/public/default.yji-86a4f9f398c3f7b5f0b7cc54152bd1eb.png)',
      height: '4em',
      width: '8em',
    },
    searchBarItem: {
      flexBasis: '55%',
      flexShrink: 0,
      [theme.breakpoints.down('md')]: {
        flexBasis: '75%',
      },
    },
    services: {
      '& > *': {
        padding: '1em 2em',
        borderBottom: '4px solid transparent',
        '&:hover': {
          borderBottom: '4px solid #f40d15',
        },
      },
    },
  }),
);
