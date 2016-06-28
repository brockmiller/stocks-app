import React, { PropTypes } from 'react'
import StockChart from './StockChart'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PriceTickerContainer from './containers/PriceTickerContainer'
import styles from '../styles/view_main.scss';
import NewsListContainer from '../components/containers/NewsListContainer'
import { Layout, NavDrawer, Panel, AppBar } from 'react-toolbox';

class ViewMain extends React.Component {
  render() {
    return (
      <div className={styles.viewMain}>
        <PriceTickerContainer symbols={['DOW', 'S&P 500', 'NASDAQ']}/>
        <NewsListContainer />
      </div>
    )
  }
}

export default ViewMain;
