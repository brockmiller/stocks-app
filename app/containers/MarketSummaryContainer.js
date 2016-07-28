import React, { PropTypes } from 'react'
import store from '../store'
import { fetchPriceQuote } from '../actions/market'
import { connect } from 'react-redux'
import MarketSummary from '../components/MarketSummary'
import { MARKET_INDEX_SYMBOLS } from '../constants'

function startPricingForSymbols() {
}

class MarketSummaryContainer extends React.Component {

  componentWillMount() {
    startPricingForSymbols()
  }

  render() {
    return <MarketSummary indexes={this.props.indexes} status={this.props.status}/>
  }

}

const mapStateToProps = (state) => {
  return {
    indexes: MARKET_INDEX_SYMBOLS.map((sym) => state.market.quotes[sym] || {}),
    status: state.market.status
  }
}

export default connect(mapStateToProps)(MarketSummaryContainer);
