import React, { PropTypes } from 'react'
import viewSummaryStyle from '../styles/view_summary.scss';
import WatchListContainer from '../containers/WatchListContainer'
import TitleBarWithSearchContainer from '../containers/TitleBarWithSearchContainer'

class ViewSummary extends React.Component {
  render() {
    return (
      <div className={viewSummaryStyle.container}>
        <WatchListContainer />
      </div>
    )
  }
}

export default ViewSummary;
