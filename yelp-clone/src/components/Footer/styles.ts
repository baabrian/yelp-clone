import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    backgroundGray: {
      backgroundColor: '#f5f5f5',
    },
    borderTop: {
      borderTop: '1px solid #ccc',
    },
    footerContent: {
      padding: '4em 0',
      '& h6': {
        padding: '6px 0',
        fontWeight: 700,
        color: '#d32323',
      },
      '& a': {
        fontSize: '14px',
        marginBottom: '5px',
        textDecoration: 'none',
        color: '#0073bb',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
    yelpFooterImage: {
      background:
        'url(https://s3-media0.fl.yelpcdn.com/assets/public/footer_cityscape.yji-573fa19c843556eac5a998fc6d1f80f8.png) no-repeat bottom',
      height: '20em',
    },
  }),
);
