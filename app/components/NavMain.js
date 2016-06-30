// React
import React from 'react';
import { Layout, NavDrawer, Panel, AppBar } from 'react-toolbox';
import { TouchIconButton } from './TouchButton';
import styles from '../styles/nav_main.scss';

class NavMain extends React.Component {
  constructor(props) {
    super(props);

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

        <Panel theme={styles}>
          <AppBar fixed flat theme={styles}>
            <TouchIconButton ripple inverse icon="menu" onClick={this.toggleDrawer}></TouchIconButton>
          </AppBar>
          {this.props.children}
        </Panel>
      </Layout>
    );
  }
}

export default NavMain
