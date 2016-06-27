// React
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import NavMain from './components/NavMain';
import ViewMain from './components/ViewMain';
import { hashHistory } from 'react-router'
import { StockChartView } from './components/StockChart'

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={NavMain}>
          <IndexRoute component={ViewMain} />
          <Route path="stocks" component={StockChartView} />
        </Route>
      </Router>
    )
  }
}

export default App
