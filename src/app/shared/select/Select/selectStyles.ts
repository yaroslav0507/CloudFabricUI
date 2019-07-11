import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export const selectStyles = (theme: Theme) => createStyles({
  input: {
    '&:focus': {
      background: 'inherit'
    }
  },
  icon: {
    right: 10
  },
  hidden: {
    display: 'none'
  }
});
