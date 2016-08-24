import React from 'react'
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import { Avatar } from 'react-toolbox/lib/avatar';
import newsListStyles from '../styles/news_list.scss'
import moment from 'moment'
import 'moment-timezone'


function formatTime(t) {
  return moment.tz(t, 'ddd, DD MMM YYYY HH:mm:ss', 'UTC').fromNow()
}

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
              legend={`${item.source} - ${formatTime(item.pubDate)}`}
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

function resolveOrNahSourceLogoByName(source) {
  // let url = 'https://logo.clearbit.com/' + (source.split(' ').join('').split(':')[0]).toLowerCase() + '.com'
  //
  // return url
}
