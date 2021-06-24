import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
      boxShadow: '0 2px 18px rgb(0 0 0 / 15%)',
      borderRadius: '4px',
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
  }),
);
