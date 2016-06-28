import React, { PropTypes } from 'react'
import PriceTick from './PriceTick'
import styles from '../styles/price_ticker.scss'


const PriceTicker = (props) => {
  return (
    <div className={styles.priceTicker}>
      {
        props.items.map((item) => {
          return (
            <PriceTick symbol={item.symbol} key={item.symbol} price={item.price} deltaPrice={item.deltaPrice} deltaPercent={item.deltaPercent}
              priceTicks={item.priceHistory}/>
          )
        })
      }
    </div>
  )
}

export default PriceTicker;
