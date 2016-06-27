import React, { PropTypes } from 'react'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';
import styles from '../styles/news_list.scss'
import moment from 'moment'
import 'moment-timezone'
import axios from 'axios'


function formatTime(t) {
  return moment.tz(t, 'ddd, DD MMM YYYY HH:mm:ss', 'UTC').fromNow()
}

const NewsList = (props) => {
  return (
    <List selectable ripple theme={styles}>
      <ListSubHeader caption='Top News Stories' theme={styles}/>
      {
        props.newsItems.map((item) =>
          <ListItem
            avatar={<Avatar title={item.source} image={resolveOrNahSourceLogoByName(item.source)} />}
            caption={item.title}
            key={item.title}
            legend={formatTime(item.pubDate)}
            rightIcon=''
            theme={styles}
          />
      )}
    </List>
  )
}

export default NewsList;

function resolveOrNahSourceLogoByName(source) {
  let url = 'https://logo.clearbit.com/' + (source.split(' ').join('').split(':')[0]).toLowerCase() + '.com'

  axios.get(url)
    .then(function(response) {
      console.log(response)
    })
    .catch(function(err) {
      console.error('fuck you and your err', err)
      url = null
      return null
    })

    return url
}
