import React, { PropTypes } from 'react'
import WatchList from '../components/WatchList'
import store from '../store'
import { refreshWatchListItems } from '../actions/market'
import { toggleDeltaPriceUnits } from '../actions/user'
import { compact } from 'lodash'
import { connect } from 'react-redux'

class WatchListContainer extends React.Component {
  componentWillMount() {
    store.dispatch(refreshWatchListItems())
  }

  render() {
    return <WatchList {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    items: compact(state.user.watchList.map((symbol) => state.market.quotes[symbol])),
    deltaUnitsAsPercentage: state.user.prefs.deltaUnitsAsPercentage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeltaUnitsToggle: () => {
      dispatch(toggleDeltaPriceUnits())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchListContainer);
