import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      padding: '3em 2em',
      border: '2px dashed #e6e6e6',
      minWidth: '75em',
      borderRadius: '9px',
      '& > *': {
        padding: '0 2em',
      },
      '& img': {
        marginRight: '2em',
      },
      '& h6': {
        fontWeight: 'bold',
      },
    },
    bannerContent: {
      '& > *': {
        padding: '3px 0',
      },
      '& button': {
        marginTop: '18px',
        backgroundColor: 'rgba(244,57,57,1)',
        color: '#fff',
        fontWeight: '700',
        padding: '12px',
        '&:hover': {},
      },
    },
    btnRed: {
      '&:hover': {
        backgroundColor: 'rgb(244,13,21)',
        boxShadow: '0 1px 4px 0 rgb(0 0 0 / 30%)',
      },
    },
  }),
);
