import React, { PropTypes } from 'react'
import MarketSummaryContainer from '../containers/MarketSummaryContainer'
import styles from '../styles/view_summary.scss';
import NewsListContainer from '../containers/NewsListContainer'

class ViewSummary extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <MarketSummaryContainer />
        <NewsListContainer />
      </div>
    )
  }
}

export default ViewSummary;
