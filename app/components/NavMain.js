// React
import React from 'react';
import { Layout, Navigation, Panel, AppBar } from 'react-toolbox';
import { TouchIconButton } from './TouchButton';
import styles from '../styles/nav_main.scss';

class NavMain extends React.Component {

  render() {
    return (
      <Layout>
        <Panel theme={styles}>
          {this.props.children}

          <AppBar flat theme={styles}>
            <Navigation type='horizontal' theme={styles}>
              <TouchIconButton icon='trending_up' accent />
              <TouchIconButton icon='view_headline' accent />
            </Navigation>
          </AppBar>

        </Panel>
      </Layout>
    );
  }
}

export default NavMain
