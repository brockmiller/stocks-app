import React, { PropTypes } from 'react'
import StockChart from './StockChart'
import { Grid, Row, Col } from 'react-flexbox-grid'

class ViewMain extends React.Component {
  render() {
    return (
      <Grid fluid style={{flex: 1, margin: 0}}>
        <Row center="xs">
          <Col xs><StockChart name="chart-0"/></Col>
          <Col xs><StockChart name="chart-1"/></Col>
          <Col xs><StockChart name="chart-2"/></Col>
        </Row>
        <Row center="xs">
          <Col xs>DOW</Col>
          <Col xs>S&P 500</Col>
          <Col xs>NASDAQ</Col>
        </Row>
      </Grid>
    )
  }
}

export default ViewMain;
