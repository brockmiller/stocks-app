import React, { PropTypes } from 'react'
import StockChart from './StockChart'
import { Grid, Row, Col } from 'react-flexbox-grid'
import PriceGlance from './PriceGlance'
import styles from './styles/view_main.scss';
import NewsArticleList from './NewsArticleList'

let spData = [2073.92,2073.78,2074.02,2069.91,2068.69,2068.26,2064.95,2063.38,2066.46,2066.04,2070.74,2070.09,2069.12,2067.76,2068.94,2069.88,2070.32,2070.83,2070.49,2072.14,2074.25,2073.49,2072.43,2071.64,2070.79,2071.22]
let dowData =[17704.82,17702.08,17710.36,17674.38,17666.57,17653.45,17625.31,17607.37,17636.5,17631.06,17668.76,17667.08,17659.82,17652.63,17662.22,17665.37,17670.44,17674.72,17674.1,17686.29,17703.45,17701.91,17690.02,17680.61,17679.75,17674.68]
let nasData = [4823.134,4818.55,4818.304,4808.807,4803.937,4803.717,4795.131,4794.052,4801.675,4797.25,4807.821,4805.307,4804.608,4798.934,4803.569,4806.367,4808.087,4807.761,4804.533,4807.472,4811.692,4807.578,4801.658,4801.085,4798.575,4800.483]

class ViewMain extends React.Component {
  render() {
    return (
      <Grid fluid style={{flex: 1, margin: 0}} className={styles.grid}>
        <Row center="xs">
          <Col xs><PriceGlance symbol='DOW' price={17675.16} deltaPrice={-57.94} deltaPercent={-0.33}
            priceTicks={dowData}/></Col>
          <Col xs><PriceGlance symbol='S&P 500' price={2071.22} deltaPrice={-6.77} deltaPercent={-0.33}
            priceTicks={spData}/></Col>
          <Col xs><PriceGlance symbol='NASDAQ' price={4800.34} deltaPrice={44.58} deltaPercent={-0.92}
            priceTicks={nasData}/></Col>
        </Row>

        <Row center="lg">
          <NewsArticleList />
        </Row>
      </Grid>
    )
  }
}

export default ViewMain;
