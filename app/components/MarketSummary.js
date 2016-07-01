import React from 'react'
import PriceTick from './PriceTick'
import styles from '../styles/market_summary.scss'


const MarketSummary = (props) => {
  return (
    <div className={styles.container}>
      {
        props.indexes.map((index) => {
          return (
            <PriceTick symbol={index.Symbol} key={index.Symbol} name={index.Name} price={index.LastPrice} deltaPrice={index.Change} deltaPercent={index.ChangePercent}/>
          )
        })
      }
    </div>
  )
}

export default MarketSummary;
