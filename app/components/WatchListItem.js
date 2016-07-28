import React, { PropTypes } from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
import styles from '../styles/watch_list_item.scss'
import theme from '../styles/_theme.scss'
import { lt } from 'lodash'

function toFixedOrNah(value) {
  return value ? value.toFixed(2) : '--'
}

const PriceDelta = (props) => {
  let isNegative = lt(props.value, 0)
  let bgStyle = { backgroundColor: isNegative ? theme.redA100 : theme.greenA200 }

  return (
    <span className={styles.deltaPrice} style={bgStyle}>
      {toFixedOrNah(props.value)}{props.units}
    </span>
  )
}

PriceDelta.PropTypes = {
  value: PropTypes.number.isRequired,
  units: PropTypes.string
}

const WatchListItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.companyInfo}>
        <h2>{props.Symbol}</h2>
        {props.Name}
      </div>
      <div className={styles.sparkline}>
        <Sparklines data={props.priceTicks} margin={8}>
          <SparklinesLine color={theme.orange200} style={{ fill: 'none', strokeWidth: 3 }} />
          <SparklinesReferenceLine
            style={{stroke: theme.darkBlueGray, strokeOpacity: 0.5, strokeWidth: 2, strokeDasharray: '2, 2'}}
            value={0}
            type='custom' />

          <SparklinesSpots size={3}
            style={{ stroke: theme.orange100, strokeWidth: 3, fill: theme.swanBlueDark }}/>
        </Sparklines>
      </div>
      <div className={styles.priceInfo}>
        <span className={styles.currentPrice}>
          {toFixedOrNah(props.LastPrice)}
        </span>
        <PriceDelta value={props.ChangePercent} units='%' />
      </div>
    </div>
  )
}

WatchListItem.PropTypes = {
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deltaPrice: PropTypes.number,
  deltaPercent: PropTypes.number,
  priceTicks: PropTypes.array
}

export default WatchListItem;
