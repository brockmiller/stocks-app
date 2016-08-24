import React, { PropTypes } from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
import styles from '../styles/watch_list_item.scss'
import theme from '../styles/_theme.scss'
import { lt, gt } from 'lodash'
import classNames from 'classnames'

function toFixedTwo(value) {
  return value ? value.toFixed(2) : '--'
}

function priceDirectionCssClass(priceDelta) {
  const isNegative = lt(priceDelta, 0)
  const isPositive = gt(priceDelta, 0)

  return isNegative ?
    styles.negative :
    isPositive ?
      styles.positive :
      null
}

class WatchListItem extends React.Component {
  render() {
    return (
      <div className={classNames(styles.container, priceDirectionCssClass(this.props.delta))}>
        <div className={styles.companyInfo}>
          <h2>{this.props.Symbol}</h2>
          {this.props.Name}
        </div>
        <div className={styles.sparkline}>
          <Sparklines data={this.props.priceTicks} margin={2}>
            <SparklinesLine xcolor={theme.orange200} style={{ fill: 'none', strokeWidth: 5 }} />
          </Sparklines>
        </div>
        <div className={styles.priceInfo} onClick={this.props.onDeltaUnitsToggle}>
          <span className={styles.currentPrice}>
            {toFixedTwo(this.props.LastPrice)}
          </span>
          <span className={styles.deltaPrice}>
            {toFixedTwo(this.props.delta)}{this.props.deltaUnits}
          </span>
        </div>
      </div>
    )
  }
}

WatchListItem.PropTypes = {
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deltaPrice: PropTypes.number,
  deltaPercent: PropTypes.number,
  priceTicks: PropTypes.array
}

export default WatchListItem;
