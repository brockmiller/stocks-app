import React, { PropTypes } from 'react'
import StockChart from './StockChart'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PriceTicker from './PriceTicker'
import styles from '../styles/view_main.scss';
import NewsListContainer from '../components/containers/NewsListContainer'
import { Layout, NavDrawer, Panel, AppBar } from 'react-toolbox';

class ViewMain extends React.Component {
  render() {
    return (
      <div className={styles.viewMain}>
        <PriceTicker />
        <NewsListContainer className={styles.newsListContainer} />
      </div>
    )
  }
}

export default ViewMain;
