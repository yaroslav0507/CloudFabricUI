import React from 'react';
import classNames from 'classnames';
import { ListItem, ListItemIcon, ListItemText, Collapse, withStyles, WithStyles } from '@material-ui/core';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import {nestedListStyles} from './nestedListStyles';

interface INestedListProps extends WithStyles<typeof nestedListStyles> {
  title: string;
  open: boolean;
  children?: any;
  handleSectionClick(): void;
}

export const NestedListBase: React.FC<INestedListProps> = ({classes, ...props}) => {
  return (
    <div className={classes.root}>
      <ListItem
        dense
        button
        onClick={() => props.handleSectionClick()}
        disableGutters
        classes={{root: classes.listItem}}
      >
        <ListItemText primary={props.title} />

        <ListItemIcon>
          <IconExpandMore
            className={classNames(classes.iconArrow, {[classes.iconActive]: props.open})}
          />
        </ListItemIcon>
      </ListItem>

      <Collapse
        in={props.open}
        timeout="auto"
        unmountOnExit
        classes={{container: classes.collapse}}
      >
        {props.children}
      </Collapse>
    </div>
  );
};

export const NestedList = withStyles(nestedListStyles)(NestedListBase);
