import React, { PropTypes } from 'react'
import store from '../../store'
import { getStockPriceSuccess } from '../../actions/price-actions'
import { connect } from 'react-redux'
import { map, forEach } from 'lodash'
import PriceTicker from '../PriceTicker'

let spData = [2073.92,2073.78,2074.02,2069.91,2068.69,2068.26,2064.95,2063.38,2066.46,2066.04,2070.74,2070.09,2069.12,2067.76,2068.94,2069.88,2070.32,2070.83,2070.49,2072.14,2074.25,2073.49,2072.43,2071.64,2070.79,2071.22]
let dowData =[17704.82,17702.08,17710.36,17674.38,17666.57,17653.45,17625.31,17607.37,17636.5,17631.06,17668.76,17667.08,17659.82,17652.63,17662.22,17665.37,17670.44,17674.72,17674.1,17686.29,17703.45,17701.91,17690.02,17680.61,17679.75,17674.68]
let nasData = [4823.134,4818.55,4818.304,4808.807,4803.937,4803.717,4795.131,4794.052,4801.675,4797.25,4807.821,4805.307,4804.608,4798.934,4803.569,4806.367,4808.087,4807.761,4804.533,4807.472,4811.692,4807.578,4801.658,4801.085,4798.575,4800.483]

let priceData = {
  'DOW': {
    price: '17564.17',
    deltaPrice: '-275.72',
    deltaPercent: '-4.5',
    priceHistory: dowData
  },
  'S&P 500': {
    price: '2002.11',
    deltaPrice: '-85.72',
    deltaPercent: '-3.5',
    priceHistory: spData
  },
  'NASDAQ': {
    price: '5001.11',
    deltaPrice: '-145.72',
    deltaPercent: '-4.1',
    priceHistory: nasData
  }
}

function startPricingForSymbols(symbols) {
  forEach(symbols, (symbol) => {
    store.dispatch(getStockPriceSuccess(symbol, priceData[symbol]))
  })
}

class PriceTickerContainer extends React.Component {

  componentDidMount() {
    startPricingForSymbols(this.props.symbols)
  }

  render () {
    return <PriceTicker items={this.props.tickerItems} />
  }


}

const mapStateToProps = (store) => {
  let tickerItems = []

  forEach(store.priceData.tickerMap, (priceData, symbol) => {
    tickerItems.push({
      symbol: symbol,
      ...priceData
    })
  })

  return {
    tickerItems: tickerItems
  }
}

export default connect(mapStateToProps)(PriceTickerContainer);
