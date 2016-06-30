import React from 'react'
import PriceTick from './PriceTick'
import styles from '../styles/price_ticker.scss'


const PriceTicker = (props) => {
  return (
    <div className={styles.priceTicker}>
      {
        props.items.map((item) => {
          return (
            <PriceTick symbol={item.Symbol} key={item.Symbol} name={item.Name} price={item.LastPrice} deltaPrice={item.Change} deltaPercent={item.ChangePercent}
              priceTicks={item.priceHistory}/>
          )
        })
      }
    </div>
  )
}

export default PriceTicker;
