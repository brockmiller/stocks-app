// React
import React from 'react';

import { merge } from 'lodash/fp';
import { Layout, NavDrawer, Panel, AppBar } from 'react-toolbox';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';
import { TouchIconButton } from './TouchButton';
import styles from './styles/app_container.scss';

import ViewMain from './ViewMain';

class AppContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      navDrawerOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ navDrawerOpen: !this.state.navDrawerOpen })
  }

  render() {
    return (
      <Layout>
        <NavDrawer active={this.state.navDrawerOpen} theme={styles}
          onOverlayClick={this.toggleDrawer}>
        </NavDrawer>

        <Panel scrollY>
          <AppBar fixed flat theme={styles}>
            <TouchIconButton inverse icon="menu" onClick={this.toggleDrawer}></TouchIconButton>
          </AppBar>
          <ViewMain />
        </Panel>
      </Layout>
    );
  }
}

export default AppContainer
