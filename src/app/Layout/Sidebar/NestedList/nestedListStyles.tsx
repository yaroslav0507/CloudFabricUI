import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export const nestedListStyles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.secondary.main,
  },
  nested: {
    paddingLeft: 20
  },
  listItem: {
    padding: '9px 7px 8px 20px',
    height: 40
  },
  iconArrow: {
    color: theme.palette.primary.main,
    transform: 'rotate(-90deg)',
    transition: 'transform ease .3s'
  },
  iconActive: {
    transform: 'none'
  },
  collapse: {
    marginTop: 0
  }
});
