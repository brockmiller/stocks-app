// React
import React from 'react';
import { Layout, Navigation, Panel, AppBar, Link } from 'react-toolbox';
import { TouchIconButton } from './TouchButton';
import navMainStyle from '../styles/nav_main.scss';

class NavMain extends React.Component {
  constructor(props) {
    super(props)


  }

  linkActive(path) {
    return this.props.location.pathname === path
  }

  render() {
    return (
      <Layout>
        <Panel theme={navMainStyle}>
          {this.props.children}

          <AppBar flat theme={navMainStyle}>
            {/* <Navigation type='horizontal' theme={navMainStyle}> */}
            <Link icon='trending_up' href='/#' className={navMainStyle.customLink} theme={navMainStyle} active={this.linkActive('/')}/>
            <Link icon='view_headline' href='/#/news' className={navMainStyle.customLink} theme={navMainStyle} active={this.linkActive('/news')}/>
            {/* </Navigation> */}
          </AppBar>

        </Panel>
      </Layout>
    );
  }
}

export default NavMain
