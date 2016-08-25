// React
import React from 'react';
import { Layout, Navigation, NavDrawer, Panel, AppBar, FontIcon, Button, IconButton, Avatar } from 'react-toolbox';
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
            <span className={navMainStyle.headerText}>tails</span>
            <span className={navMainStyle.headerLogo}><FontIcon theme={navMainStyle} value='show_chart' /></span>
          </div>

          <Navigation theme={navMainStyle} type='vertical'>
            <Button primary theme={navMainStyle} ripple icon='trending_up' label='Watchlist' href='/#' />
            <Button primary theme={navMainStyle} ripple icon='view_headline' label='Headlines' href='/#/news' />
            <Button primary theme={navMainStyle} ripple icon='search' label='Search' href='/#/search' />
          </Navigation>
        </NavDrawer>

        <Panel>
          <AppBar theme={navMainStyle}>
            <IconButton ripple inverse icon="menu" onClick={this.toggleDrawer}></IconButton>
          </AppBar>

          <div className={navMainStyle.scrollableView}>
            {this.props.children}
          </div>

          <Button primary ripple floating icon='search' className={navMainStyle.searchButton} />

        </Panel>
      </Layout>
    );
  }
}

export default NavMain
