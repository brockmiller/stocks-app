// React
import React from 'react';

import { merge } from 'lodash/fp';
import { Layout, NavDrawer, Panel, AppBar } from 'react-toolbox';
import { TouchButton } from './TouchButton';
import appBarTheme from './styles/app_bar.scss';

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
          <p>
            Navigation, account switcher, etc. go here.
          </p>
        </NavDrawer>
        <Panel>
          <AppBar flat theme={appBarTheme}>
            <TouchButton mini floating accent icon="menu" onClick={this.toggleDrawer}></TouchButton>
          </AppBar>
          <div> Yes indeed </div>
        </Panel>
      </Layout>
    );
  }
}

export default AppContainer
