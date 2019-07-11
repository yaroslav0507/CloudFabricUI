import React from 'react';
import classNames from 'classnames';
import { ListItem, ListItemIcon, ListItemText, withStyles, WithStyles } from '@material-ui/core';
import {sidebarListItemStyles} from './sidebarListItemStyles';
import { NavLink } from 'react-router-dom';

interface ISidebarListItemProps extends WithStyles<typeof sidebarListItemStyles> {
  to?: string;
  icon: JSX.Element;
  title: string;
  active?: boolean;
  count?: number;
  onClick(): void;
}

class SidebarListItemBase extends React.Component<ISidebarListItemProps> {
  render() {
    const { classes, count } = this.props;
    const link = this.props.to || '';

    return (
      <NavLink
        to={link}
        onClick={() => this.props.onClick()}
        activeClassName={classes.active}
      >
        <ListItem
          button
          dense
          disableGutters
          className={classNames(classes.root, {[classes.active]: this.props.active})}
        >
          <ListItemIcon classes={{root: classes.icon}}>
            {this.props.icon}
          </ListItemIcon>

          <ListItemText
            primary={this.props.title}
            classes={{textDense: classes.text}}
          />

          {count ? (
            <span className={classes.count}>{count}</span>
          ) : ''}
        </ListItem>
      </NavLink>
    );
  }
}

export const SidebarListItem = withStyles(sidebarListItemStyles)(SidebarListItemBase);
