// React
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import NavMain from '../components/NavMain';
import WatchListContainer from '../containers/WatchListContainer'
import NewsListContainer from '../containers/NewsListContainer'
import { hashHistory } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={NavMain}>
          <IndexRoute component={WatchListContainer} />
          <Route path="news" component={NewsListContainer} />
        </Route>
      </Router>
    )
  }
}

export default App
