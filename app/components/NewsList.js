import React from 'react'
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import { Avatar } from 'react-toolbox/lib/avatar';
import newsListStyles from '../styles/news_list.scss'
import moment from 'moment'

const NewsList = (props) => {
  return (
    <div className={newsListStyles.container}>
      <List selectable ripple theme={newsListStyles}>
        <ListSubHeader caption='Top News Stories' theme={newsListStyles}/>
        {
          props.newsItems.map((item) =>
            <ListItem
              caption={item.title}
              key={item.title}
              legend={`${item.source} - ${moment(item.moment).fromNow()}`}
              rightIcon=''
              theme={newsListStyles}
              to={item.link}
            />
        )}
      </List>
    </div>
  )
}

export default NewsList;
