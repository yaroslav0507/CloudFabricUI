import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export const DRAWER_WIDTH = 310;

export const sidebarStyles = (theme: Theme) => createStyles({
  drawerPaper: {
    position: 'relative',
    width: DRAWER_WIDTH,
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  section: {
    fontSize: '14px',
    backgroundColor: theme.palette.secondary.light,
    padding: '12px 20px'
  }
});
