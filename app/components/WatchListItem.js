import React, { PropTypes } from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
import styles from '../styles/watch_list_item.scss'
import theme from '../styles/_theme.scss'
import { lt, gt } from 'lodash'
import classNames from 'classnames'

function toFixedOrNah(value) {
  return value ? value.toFixed(2) : '--'
}

const WatchListItemPriceDelta = (props) => {
  const isNegative = lt(props.value, 0)
  const isPositive = gt(props.value, 0)
  let cName = classNames(styles.deltaPrice, { [styles.positive]: isPositive, [styles.negative]: isNegative })

  return (
    <span className={cName}>
      {toFixedOrNah(props.value)}{props.units}
    </span>
  )
}

WatchListItemPriceDelta.PropTypes = {
  value: PropTypes.number.isRequired,
  units: PropTypes.string
}

class WatchListItem extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.companyInfo}>
          <h2>{this.props.Symbol}</h2>
          {this.props.Name}
        </div>
        <div className={styles.sparkline}>
          <Sparklines data={this.props.priceTicks} margin={8}>
            <SparklinesLine color={theme.orange200} style={{ fill: 'none', strokeWidth: 3 }} />
            <SparklinesReferenceLine
              style={{stroke: theme.darkBlueGray, strokeOpacity: 0.5, strokeWidth: 2, strokeDasharray: '2, 2'}}
              value={0}
              type='custom' />

            <SparklinesSpots size={3}
              style={{ stroke: theme.orange100, strokeWidth: 3, fill: theme.swanBlueDark }}/>
          </Sparklines>
        </div>
        <div className={styles.priceInfo} onClick={this.props.onDeltaUnitsToggle}>
          <span className={styles.currentPrice}>
            {toFixedOrNah(this.props.LastPrice)}
          </span>
          <WatchListItemPriceDelta value={this.props.delta} units={this.props.deltaUnits} />
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
