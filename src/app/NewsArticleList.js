import React, { PropTypes } from 'react'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';


class NewsArticleList extends React.Component {
  render () {
    return (
      <List selectable ripple>
        <ListSubHeader caption='Explore characters' />
        <ListItem
          avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
          caption='Dr. Manhattan'
          legend="Jonathan 'Jon' Osterman"
          rightIcon='star'
        />
        <ListItem
          avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
          caption='Ozymandias'
          legend='Adrian Veidt'
          rightIcon='star'
        />
        <ListItem
          avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
          caption='Rorschach'
          legend='Walter Joseph Kovacs'
          rightIcon='star'
        />
        <ListSubHeader caption='Configuration' />
          <ListCheckbox checked caption='Notify new comics' legend='You will receive a notification when a new one is published' />
          <ListDivider />
          <ListItem caption='Contact the publisher' leftIcon='send' />
        <ListItem caption='Remove this publication' leftIcon='delete' />
      </List>
    )
  }
}

export default NewsArticleList;
