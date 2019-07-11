import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export const sidebarListItemStyles = (theme: Theme) => createStyles({
  root: {
    position: 'relative',
    fontSize: 13,
    color: '#fff',

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      width: 10,
      height: '100%'
    }
  },
  icon: {
    marginLeft: '10px'
  },
  text: {
    color: '#fff'
  },
  active: {
    '& > div': {
      background: '#004e82',
      // background: theme.palette.secondary.light,

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
