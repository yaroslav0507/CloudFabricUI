import React, { Fragment, useState } from 'react';
import { withStyles, WithStyles, Drawer, SwipeableDrawer } from '@material-ui/core';

import { NestedList } from './NestedList/NestedList';
import { SidebarListItem } from './SidebarListItem/SidebarListItem';
import { sidebarStyles } from './sidebarStyles';
import IconComputer from '../../../images/baseline-computer-24px.svg';
import SidebarLogo from '../../../images/CloudFabric_LogoHorzWhite.svg';
import styled from 'styled-components';
const CLIENTS_SECTION = 'CLIENTS_SECTION';

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
  padding: 11px 56px 10px 15px;
  background-color: #474747;
`;

const NestedListWrapper = styled.div`
  padding: 12px 5px;
`;

export const SidebarBase: React.FC<ISidebarProps> = (props) => {
  const [openedSection, setOpenedSection] = useState(CLIENTS_SECTION);

  const onItemSelected = () => {
    if (!props.isDesktop) {
      props.toggleDrawer();
    }
  };

  const {classes, open, isDesktop} = props;

  const ClientsSection = (
    <NestedListWrapper>
      <NestedList
        open={openedSection === CLIENTS_SECTION}
        title="Clients"
        handleSectionClick={() => setOpenedSection(openedSection === CLIENTS_SECTION ? '' : CLIENTS_SECTION)}
      >
        <SidebarListItem
          onClick={() => onItemSelected()}
          to="/clients/kl-wines"
          title="KLWines"
          icon={<IconComputer className="icon-white"/>}
        />
        <SidebarListItem
          onClick={() => onItemSelected()}
          to="/clients/approve-engine"
          title="ApproveEngine"
          icon={<IconComputer className="icon-white"/>}
        />
        <SidebarListItem
          onClick={() => onItemSelected()}
          to="/clients/car-finance"
          title="CarFinance"
          icon={<IconComputer className="icon-white"/>}
        />
        <SidebarListItem
          onClick={() => onItemSelected()}
          to="/clients/simon-med"
          title="SimonMed"
          icon={<IconComputer className="icon-white"/>}
        />
        <SidebarListItem
          onClick={() => onItemSelected()}
          to="/clients/cu-auctions"
          title="CUAuctions"
          icon={<IconComputer className="icon-white"/>}
        />
      </NestedList>
    </NestedListWrapper>
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
