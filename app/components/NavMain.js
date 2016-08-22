// React
import React from 'react';
import { Layout, Navigation, NavDrawer, Panel, AppBar, Button, IconButton, Avatar } from 'react-toolbox';
import navMainStyle from '../styles/nav_main.scss';

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
      <Layout theme={navMainStyle}>
        <NavDrawer theme={navMainStyle} active={this.state.navDrawerOpen} onOverlayClick={this.toggleDrawer}>
          <div className={navMainStyle.header}>
            STOCKS
          </div>

          <Navigation type='vertical'>
            <Button theme={navMainStyle} ripple icon='trending_up' label='Watchlist' href='/#' />
            <Button theme={navMainStyle} ripple icon='view_headline' label='Headlines' href='/#/news' />
          </Navigation>
        </NavDrawer>

        <Panel>
          <AppBar theme={navMainStyle}>
            <IconButton ripple inverse icon="menu" onClick={this.toggleDrawer}></IconButton>
          </AppBar>

          {this.props.children}

        </Panel>
      </Layout>
    );
  }
}

export default NavMain
