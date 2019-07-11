import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { withStyles, WithStyles } from '@material-ui/core';
import { layoutStyles } from './layoutStyles';
import {MuiPickersUtilsProvider} from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import { Sidebar } from './Sidebar/Sidebar';

interface ILayoutState {
  leftDrawerOpen: boolean;
  rightDrawerOpen: boolean;
  isDesktop: boolean;
}

type ILayoutProps = WithStyles<typeof layoutStyles>;

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const hideSidebarScreenWidth = () => {
  return window.location.pathname.indexOf('id') >= 0 ? 1510 : 1128;
};

class LayoutBase extends React.Component<ILayoutProps, ILayoutState> {
  state = {
    leftDrawerOpen: !isMobile ? window.innerWidth > hideSidebarScreenWidth() : false,
    rightDrawerOpen: false,
    isDesktop: !isMobile
  };

  componentDidMount() {
    if (this.state.isDesktop) {
      this.handleSidebarCheck();
      window.addEventListener('resize', () => this.handleSidebarCheck());
    }
  }

  componentWillUnmount() {
    if (this.state.isDesktop) {
      window.removeEventListener('resize', () => this.handleSidebarCheck());
    }
  }

  handleSidebarCheck() {
    if (window.innerWidth <= hideSidebarScreenWidth()) {
      if (this.state.leftDrawerOpen) {
        this.toggleLeftDrawerState();
      }
    } else {
      if (!this.state.leftDrawerOpen) {
        this.toggleLeftDrawerState();
      }
    }
  }

  toggleLeftDrawerState() {
    this.setState({leftDrawerOpen: !this.state.leftDrawerOpen});
  }

  toggleRightDrawerState() {
    this.setState({rightDrawerOpen: !this.state.rightDrawerOpen});
  }

  render() {
    const {classes} = this.props;
    const {leftDrawerOpen, isDesktop} = this.state;

    return (
      <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <Sidebar
              isDesktop={this.state.isDesktop}
              open={this.state.leftDrawerOpen}
              toggleDrawer={() => this.toggleLeftDrawerState()}
            />

            <main
              className={classNames(classes.content, {
                [classes['content-left']]: isDesktop,
                [classes.contentShift]: leftDrawerOpen && isDesktop,
                [classes['contentShift-left']]: leftDrawerOpen && isDesktop
              })}
            >
              {this.props.children}
            </main>
          </div>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

export const Layout = withStyles(layoutStyles, {withTheme: true})(LayoutBase);
