import React, { PropTypes } from 'react'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import styles from './styles/news_list.scss'

class NewsArticleList extends React.Component {

  render () {
    return (
      <div className={styles.list}>
        <List selectable ripple>
          <ListSubHeader caption='Top News' />
          <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
            caption='Dr. Manhattan'
            legend="Jonathan 'Jon' Osterman"
            rightIcon='star'
          />
          <ListSubHeader caption='Configuration' />
          <ListCheckbox checked caption='Notify new comics' legend='You will receive a notification when a new one is published' />
          <ListDivider />
          <ListItem caption='Contact the publisher' leftIcon='send' />
          <ListItem caption='Remove this publication' leftIcon='delete' />
        </List>
      </div>
    )
  }
}

export default NewsArticleList;
