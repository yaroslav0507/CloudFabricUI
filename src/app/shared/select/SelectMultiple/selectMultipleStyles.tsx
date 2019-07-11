import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core';

export const selectMultipleStyles = (theme: Theme) => createStyles({
  formControl: {
    // minWidth: 120
  },
  dropdownItem: {
    padding: '5px 9px'
  },
  dropdownItemText: {
    paddingLeft: 0
  },
  dropdownItemTextPrimary: {
    fontSize: 14
  },
});
