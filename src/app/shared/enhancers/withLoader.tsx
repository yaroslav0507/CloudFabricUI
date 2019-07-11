import React from 'react';
import { WithStyles } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

export interface IWithLoaderProps {
  loading?: boolean;
}

const styles = () => createStyles({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    transform: 'none'
  }
});

type ILoaderProps = WithStyles<typeof styles>;

export const Loader = withStyles(styles)
(({classes}: ILoaderProps) => <CircularProgress classes={{root: classes.root}}/>);

export const withLoader = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoader extends React.Component<P & IWithLoaderProps> {
    render() {
      const { loading, ...props } = this.props as IWithLoaderProps;
      return loading ? <Loader /> : <Component {...props} />;
    }
  };
