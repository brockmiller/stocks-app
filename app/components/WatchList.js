import React from 'react'
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import { Avatar } from 'react-toolbox/lib/avatar';
import watchListStyles from '../styles/watch_list.scss'
import WatchListItem from './WatchListItem'
import { shuffle } from 'lodash'

const priceTicks = [
  100, 101, 102, 104, 102, 103, 102, 103, 104, 103, 102, 101, 102, 103
]

const WatchList = (props) => {
  const deltaUnits = props.deltaUnitsAsPercentage ?
    { fieldName: 'ChangePercent', label: '%' } :
    { fieldName: 'Change', label: null }

  return (
    <div className={watchListStyles.container}>
      <List selectable ripple theme={watchListStyles}>
        {
          props.items.map((item) =>
            <WatchListItem
              key={item.Symbol}
              {...item}
              delta={item[deltaUnits.fieldName]}
              deltaUnits={deltaUnits.label}
              onDeltaUnitsToggle={props.onDeltaUnitsToggle}
              priceTicks={shuffle(priceTicks)}
            />
          )
        }
      </List>
    </div>
  )
}

export default WatchList;
