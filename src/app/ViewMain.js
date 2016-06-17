import React, { PropTypes } from 'react'
import StockChart from './StockChart'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PriceGlance from './PriceGlance'
import styles from './styles/view_main.scss';

class ViewMain extends React.Component {
  render() {
    return (
      <Grid fluid style={{flex: 1, margin: 0}} className={styles.grid}>
        <Row center="xs">
          <Col xs><PriceGlance symbol='DOW' price={17675.16} deltaPrice={-57.94} deltaPercent={-0.33}/></Col>
          <Col xs><PriceGlance symbol='S&P 500' price={2071.22} deltaPrice={-6.77} deltaPercent={-0.33}/></Col>
          <Col xs><PriceGlance symbol='NASDAQ' price={4800.34} deltaPrice={-44.58} deltaPercent={-0.92}/></Col>
        </Row>
      </Grid>
    )
  }
}

export default ViewMain;
