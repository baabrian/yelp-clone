import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    locationContainer: {
      '& h5': {
        paddingTop: '1.5em',
        paddingBottom: '9px',
        fontWeight: 700,
        color: '#d32323',
      },
    },
    locationNavs: {
      borderBottom: '2px solid #ccc',
      '& a': {
        textDecoration: 'none',
        fontSize: '12px',
        color: '#666',
        marginRight: '2px',
        padding: '6px 1em',
        borderBottom: '3px solid transparent',
        '&:hover': {
          borderBottom: '3px solid #d32323',
        },
      },
    },
  }),
);
