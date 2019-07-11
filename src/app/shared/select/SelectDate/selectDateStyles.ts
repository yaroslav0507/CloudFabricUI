import createStyles from '@material-ui/core/styles/createStyles';

export const selectDateStyles = () => createStyles({
  root: {
    '& > div': {
      width: '100%'
    }
  },
  adornment: {
    width: 34,
    position: 'relative'
  }
});
