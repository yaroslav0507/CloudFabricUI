import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export const sidebarListItemStyles = (theme: Theme) => createStyles({
  root: {
    position: 'relative',
    fontSize: 13,
  },
  icon: {
    marginLeft: '20px'
  },
  text: {
    color: '#fff'
  },
  active: {
    '& > div': {
      background: '#333232',

      '&:hover': {
        backgroundColor: theme.palette.secondary.dark
      },
      '&:before': {
        backgroundColor: theme.palette.primary.main
      }
    }
  },
  secondaryAction: {
    paddingRight: 20
  },
  count: {
    color: '#fff',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 10,
    fontSize: 11,
    padding: '4px 10px',
    marginRight: 10
  }
});
