// React
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import NavMain from '../components/NavMain';
import ViewSummary from '../components/ViewSummary';
import { hashHistory } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={NavMain}>
          <IndexRoute component={ViewSummary} />
        </Route>
      </Router>
    )
  }
}

export default App
