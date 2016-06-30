import React, { PropTypes } from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
import styles from '../styles/price_tick.scss'
import theme from '../styles/_theme.scss'
import { lt } from 'lodash'

const PriceDelta = (props) => {
  let isNegative = lt(props.value, 0)
  let priceStyle = { color: isNegative ? theme.redA100 : theme.greenA200 }

  return (
    <span className={styles.deltaPrice} style={priceStyle}>
      { props.value ? props.value.toFixed(2) : '-' }{props.units}
    </span>
  )
}

PriceDelta.PropTypes = {
  value: PropTypes.number.isRequired,
  units: PropTypes.string
}

const PriceTick = (props) => {
  return (
    <div className={styles.container}>
      {props.symbol}
      <div className={styles.sparkline}>
        <Sparklines data={props.priceTicks} margin={8}>
          <SparklinesLine color={theme.orange200} style={{ fill: "none", strokeWidth: 3 }} />
          <SparklinesReferenceLine
            style={{stroke: theme.darkBlueGray, strokeOpacity: 0.5, strokeWidth: 2, strokeDasharray: '2, 2'}}
            value={0}
            type='custom' />

          <SparklinesSpots size={3}
            style={{ stroke: theme.orange100, strokeWidth: 3, fill: theme.swanBlueDark }}/>
        </Sparklines>
      </div>
      <div className={styles.price}>
        <div className={styles.currentPrice}>
          ${ props.price ? props.price.toFixed(2) : '--' }
        </div>
        <PriceDelta value={props.deltaPrice} /> / <PriceDelta value={props.deltaPercent} units='%' />
      </div>
    </div>
  )
}

PriceTick.PropTypes = {
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deltaPrice: PropTypes.number,
  deltaPercent: PropTypes.number,
  priceTicks: PropTypes.array
}

export default PriceTick;
