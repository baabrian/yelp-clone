import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      backgroundImage:
        'url(https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/f1767b5aca82/assets/img/home/hero_photos/H8OvnEBJ4Tiu2a1oLfrbcA.jpg)',
      paddingTop: '3rem',
      height: '60em',
      backgroundSize: 'cover',
      backgroundPosition: '50%',
    },
    heroNavBar: {
      '& a': {
        textDecoration: 'none',
        color: '#fff',
        padding: '8px 14px',
        marginRight: '2px',
        '&:hover': {
          borderBottom: '2px solid',
        },
        '&:active': {
          color: '#999',
        },
      },
      backgroundColor: 'transparent',
      boxShadow: 'none',
      fontSize: '1.5em',
      fontWeight: 700,
    },
    heroNavs: {
      display: 'flex',
    },
    heroSignUpBtn: {
      borderColor: '#fff',
      color: '#fff',
      fontWeight: 700,
      '&:hover': {
        background: '#fff',
        color: '#666',
      },
    },
    heroYelpLogo: {
      backgroundImage: 'url(https://s3-media0.fl.yelpcdn.com/assets/public/default.yji-1997cfe373f3a95a1467e9b715f3934a.png)',
      height: '8em',
      width: '16em',
      backgroundRepeat: 'no-repeat',
    },
    input: {
      background: '#fff',
      padding: '6px 0px',
    },
    inputLabel: {
      fontWeight: 700,
      color: '#666',
      padding: '0px 1em',
    },
    searchBtn: {
      backgroundColor: '#d32323',
      color: '#fff',
      borderRadius: '0 3px 3px 0',
      '&:hover': { backgroundColor: '#be2020' },
    },
    categories: {
      paddingTop: '2em',
      paddingBottom:'12em',
      color: '#fff',
      fontSize: '1.5em',

      '& > *': {
        padding: '8px 14px',
      },
      '& a': {
        fontWeight: 700,
        textDecoration: 'none',
        color: '#fff',
        marginRight: '2px',
        '&:hover': {
          borderBottom: '1px solid',
        },
      },
    },
    creatorInfo: {
      fontSize:'1.5em',
      color:'#fff',
      '& a': {
        fontWeight: 700,
        textDecoration: 'none',
        color: '#fff',
        marginRight: '2px',
        '&:hover': {
          borderBottom: '1px solid',
        },
      },
    },
  }),
);
