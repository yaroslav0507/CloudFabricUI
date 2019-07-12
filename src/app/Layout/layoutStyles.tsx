import { createStyles, Theme } from '@material-ui/core';
import { DRAWER_WIDTH } from './Sidebar/sidebarStyles';

export const layoutStyles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  hide: {
    display: 'none',
  },
  content: {
    maxWidth: '100%',
    position: 'relative',
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: `24px 32px`,
    paddingBottom: 20,
    overflowY: 'auto',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  'content-left': {
    marginLeft: -DRAWER_WIDTH,
  },
  'content-right': {
    marginRight: -DRAWER_WIDTH,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  'contentShift-left': {
    marginLeft: 0,
    maxWidth: `calc(100% - ${DRAWER_WIDTH}px)`
  },
  'contentShift-right': {
    marginRight: 0,
  }
});
