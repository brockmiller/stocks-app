import React, { PropTypes } from 'react'
import WatchList from '../components/WatchList'
import store from '../store'
import { refreshWatchListItems } from '../actions/market'
import { compact } from 'lodash'
import { connect } from 'react-redux'

class WatchListContainer extends React.Component {
  componentWillMount() {
    store.dispatch(refreshWatchListItems())
  }

  render() {
    return <WatchList items={compact(this.props.items)} />
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.user.watchList.map((symbol) => state.market.quotes[symbol])
  }
}

export default connect(mapStateToProps)(WatchListContainer);
