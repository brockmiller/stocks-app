import React, { PropTypes } from 'react'
import PriceTickerContainer from '../containers/PriceTickerContainer'
import styles from '../styles/view_summary.scss';
import NewsListContainer from '../containers/NewsListContainer'

class ViewSummary extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <PriceTickerContainer />
        <NewsListContainer />
      </div>
    )
  }
}

export default ViewSummary;;
