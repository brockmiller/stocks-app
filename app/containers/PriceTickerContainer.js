import React, { PropTypes } from 'react'
import store from '../store'
import { fetchPriceQuote } from '../actions/price'
import { connect } from 'react-redux'
import { compact } from 'lodash'
import PriceTicker from '../components/PriceTicker'


function startPricingForSymbols() {
  let symbols = store.getState().priceData.tickerSymbols

  symbols.forEach((symbol) => {
    store.dispatch(fetchPriceQuote(symbol))
  })
}

class PriceTickerContainer extends React.Component {

  componentWillMount() {
    startPricingForSymbols()
  }

  render () {
    return <PriceTicker items={this.props.tickerItems} />
  }


}

const mapStateToProps = (state) => {
  return {
    tickerItems: compact(state.priceData.tickerSymbols.map((symbol) => state.priceData.priceQuoteBySymbol[symbol]))
  }
}

export default connect(mapStateToProps)(PriceTickerContainer);
