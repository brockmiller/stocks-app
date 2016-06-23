// React
import React from 'react';

import { merge } from 'lodash/fp';
import { Layout, NavDrawer, Panel, AppBar } from 'react-toolbox';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';
import { TouchIconButton } from './TouchButton';
import appBarTheme from './styles/app_bar.scss';

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
        <NavDrawer active={this.state.navDrawerOpen}
          onOverlayClick={this.toggleDrawer}>
        </NavDrawer>

        <Panel>
          <AppBar flat theme={appBarTheme}>
            <TouchIconButton inverse icon="menu" onClick={this.toggleDrawer}></TouchIconButton>
          </AppBar>
          <ViewMain />
        </Panel>
      </Layout>
    );
  }
}

export default AppContainer
