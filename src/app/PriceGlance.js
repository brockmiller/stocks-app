import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
import styles from './styles/price_glance.scss'
import theme from './styles/_theme.scss'
import { lt } from 'lodash'

const PriceDelta = (props) => {
  let isNegative = lt(props.value, 0)
  let priceStyle = { color: isNegative ? theme.redA100 : theme.greenA100 }

  return (
    <span className={styles.deltaPrice} style={priceStyle}>{props.value}{props.units}</span>
  )
}

PriceDelta.PropTypes = {
  value: PropTypes.number.isRequired,
  units: PropTypes.string
}

class PriceGlance extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sparkline}>
          <Sparklines data={[5, 10, 7, 13, 5, 17, 19,5, 10, 7, 13, 5, 17, 19]} margin={10}>
            <SparklinesLine color={theme.orange100} style={{ fill: "none", strokeWidth: 5 }} />
            <SparklinesReferenceLine style={{stroke: 'white', strokeOpacity: 0.5, strokeWidth: 2, strokeDasharray: '2, 2'}}/>
            <SparklinesSpots size={4}
              style={{ stroke: theme.orange100, strokeWidth: 3, fill: theme.swanBlueDark }}/>
          </Sparklines>
        </div>
        <div className={styles.price}>
          <div className={styles.currentPrice}>{this.props.price}</div>
          <PriceDelta value={this.props.deltaPrice} /> / <PriceDelta value={this.props.deltaPercent} units='%' />
        </div>
      </div>
    )
  }
}

PriceGlance.PropTypes = {
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
export default PriceGlance;
