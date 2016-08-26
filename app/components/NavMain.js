// React
import React from 'react';
import { Layout, Navigation, NavDrawer, Panel, AppBar, FontIcon, Button, IconButton, Avatar } from 'react-toolbox';
import navMainStyle from '../styles/nav_main.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class NavMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navDrawerOpen: false,
      searchBarOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
  }

  toggleDrawer() {
    this.setState({ navDrawerOpen: !this.state.navDrawerOpen })
  }

  toggleSearchBar() {
    this.setState({ searchBarOpen: !this.state.searchBarOpen })
  }

  render() {
    return (
      <Layout theme={navMainStyle}>
        <NavDrawer theme={navMainStyle} active={this.state.navDrawerOpen} onOverlayClick={this.toggleDrawer}>
          <div className={navMainStyle.header}>
            <span className={navMainStyle.headerText}>tails</span>
            <span className={navMainStyle.headerLogo}><FontIcon value='show_chart' /></span>
          </div>

          <Navigation theme={navMainStyle} type='vertical'>
            <Button primary theme={navMainStyle} ripple icon='trending_up' label='Watchlist' href='/#' />
            <Button primary theme={navMainStyle} ripple icon='view_headline' label='Headlines' href='/#/news' />
            <Button primary theme={navMainStyle} ripple icon='search' onClick={this.toggleSearchBar} label='Search' />
          </Navigation>
        </NavDrawer>

        <Panel>
          <AppBar theme={navMainStyle}>
            <IconButton ripple inverse icon="menu" onClick={this.toggleDrawer}></IconButton>
          </AppBar>

          <div className={navMainStyle.scrollableView}>
            {this.props.children}
          </div>

          <Button primary ripple floating mini icon='search' theme={navMainStyle} onClick={this.toggleSearchBar}/>

          <ReactCSSTransitionGroup
            transitionName={{
              enter: navMainStyle.enter,
              enterActive: navMainStyle.enterActive,
              leave: navMainStyle.leave,
              leaveActive: navMainStyle.leaveActive,
            }}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            {
              this.state.searchBarOpen &&
                <div className={navMainStyle.searchContainer}>
                  SEARCH BAR
                </div>
            }
          </ReactCSSTransitionGroup>
        </Panel>
      </Layout>
    );
  }
}

export default NavMain
