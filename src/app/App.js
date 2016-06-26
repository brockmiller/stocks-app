// React
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import NavMain from './NavMain';
import ViewMain from './ViewMain';
import { hashHistory } from 'react-router'
import StockChart from './StockChart'

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={NavMain}>
          <IndexRoute component={ViewMain} />
          <Route path="stocks" component={StockChart} />
        </Route>
      </Router>
    )
  }
}

export default App
