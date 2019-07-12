import React, { Fragment, useState } from 'react';
import { withStyles, WithStyles, Drawer, SwipeableDrawer } from '@material-ui/core';

import { NestedList } from './NestedList/NestedList';
import { SidebarListItem } from './SidebarListItem/SidebarListItem';
import { sidebarStyles } from './sidebarStyles';
import IconComputer from '../../../images/baseline-computer-24px.svg';
import SidebarLogo from '../../../images/CloudFabric_LogoHorzWhite.svg';
import styled from 'styled-components';
const TOOLS_SECTION = 'TOOLS_SECTION';

declare const process: any;

interface ISidebarProps extends WithStyles<typeof sidebarStyles> {
  open: boolean;
  isDesktop: boolean;
  toggleDrawer(): void;
}

interface ISidebarState {
  openedSection: string;
}

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const SidebarLogoWrapper = styled.div`
  padding: 20px;
`;

export const SidebarBase: React.FC<ISidebarProps> = (props) => {
  const [openedSection, setOpenedSection] = useState('');

  const onItemSelected = () => {
    if (!props.isDesktop) {
      props.toggleDrawer();
    }
  };

  const {classes, open, isDesktop} = props;

  const ClientsSection = (
    <NestedList
      open
      title="Clients"
      handleSectionClick={() => setOpenedSection(TOOLS_SECTION)}
    >
      <SidebarListItem
        onClick={() => onItemSelected()}
        to="/clients/create-new"
        title="KLWines"
        icon={<IconComputer className="icon-white"/>}
      />
    </NestedList>
  );

  const SidebarContent = (
    <Fragment>
      <SidebarLogoWrapper>
        <SidebarLogo />
      </SidebarLogoWrapper>
      {ClientsSection}
    </Fragment>
  );

  return (
    isDesktop ? (
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{paper: classes.drawerPaper}}
        children={SidebarContent}
      />
    ) : (
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="left"
        open={open}
        classes={{paper: classes.drawerPaper}}
        onOpen={() => props.toggleDrawer()}
        onClose={() => props.toggleDrawer()}
        children={SidebarContent}
      />
    )
  );
};

export const Sidebar = withStyles(sidebarStyles)(SidebarBase);
