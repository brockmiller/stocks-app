import React from 'react'
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import { Avatar } from 'react-toolbox/lib/avatar';
import styles from '../styles/watch_list.scss'
import WatchListItem from './WatchListItem'


const WatchList = (props) => {
  const deltaUnits = props.deltaUnitsAsPercentage ?
    { fieldName: 'ChangePercent', label: '%' } :
    { fieldName: 'Change', label: null }

  return (
    <div className={styles.container}>
      <List selectable ripple theme={styles}>
        <ListSubHeader caption='Your Watchlist' theme={styles}/>
        {
          props.items.map((item) =>
            <WatchListItem
              key={item.Symbol}
              {...item}
              delta={item[deltaUnits.fieldName]}
              deltaUnits={deltaUnits.label}
              onDeltaUnitsToggle={props.onDeltaUnitsToggle}
            />
          )
        }
      </List>
    </div>
  )
}

export default WatchList;
