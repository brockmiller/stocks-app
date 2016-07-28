import React from 'react'
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import { Avatar } from 'react-toolbox/lib/avatar';
import styles from '../styles/watch_list.scss'


const WatchList = (props) => {
  return (
    <div className={styles.container}>
      <List selectable ripple theme={styles}>
        <ListSubHeader caption='Your Watchlist' theme={styles}/>
        {
          props.items.map((item) =>
            <ListItem
              caption={item.Symbol}
              key={item.Symbol}
              legend={`${item.Change} (${item.ChangePercent})`}
              rightIcon=''
              theme={styles}
            />
          )
        }
      </List>
    </div>
  )
}

export default WatchList;
