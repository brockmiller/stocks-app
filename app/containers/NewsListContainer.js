import React, { PropTypes } from 'react'
import NewsList from '../components/NewsList'
import store from '../store'
import { refreshNewsHeadlines } from '../actions/news'
import { sample } from 'lodash'
import { connect } from 'react-redux'

function refreshNewsItems() {
  store.dispatch(refreshNewsHeadlines())
}

class NewsListContainer extends React.Component {
  componentWillMount() {
    refreshNewsItems();
  }

  render() {
    return <NewsList newsItems={this.props.news} />
  }
}

const mapStateToProps = function(store) {
  return {
    news: store.news.headlines
  };
};

export default connect(mapStateToProps)(NewsListContainer);
