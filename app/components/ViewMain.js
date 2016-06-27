import React, { PropTypes } from 'react'
import StockChart from './StockChart'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PriceTicker from './PriceTicker'
import styles from '../styles/view_main.scss';
import NewsList from './NewsList'
import { Layout, NavDrawer, Panel, AppBar } from 'react-toolbox';

class ViewMain extends React.Component {
  render() {
    return (
      <div className={styles.viewMain}>
        <PriceTicker />
        <div className={styles.newsListContainer}>
          <NewsList/>
        </div>
      </div>
    )
  }
}

export default ViewMain;
