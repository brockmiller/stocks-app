import React, { PropTypes } from 'react'
import NewsList from '../components/NewsList'
import store from '../store'
import { getNewsSuccess } from '../actions/news'
import { sample } from 'lodash'
import { connect } from 'react-redux'

const news = [
    {
      'source': 'NPR',
     'title': 'Make Britain Great Again? Donald Trump\'s Remarkable Reaction To \'Brexit\'',
     'link': 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNEq2nXVwRS06-M0Vleq8ky6KLZgOg&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779136817578&ei=CrdtV6jaI9jMuQKT0quIAw&url=http://www.npr.org/2016/06/24/483353866/make-britain-great-again-donald-trumps-remarkable-reaction-to-brexit',
     'pubDate': 'Fri, 24 Jun 2016 14:46:54 GMT'
    },
    {
      'source': 'Reuters',
     'title': 'US STOCKS-Worst day in 10 months as Wall Street reacts to \'Brexit\'',
     'link': 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNGSSbTs0rypgTZhaGNRXif7UILcwQ&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779139251526&ei=CrdtV6jaI9jMuQKT0quIAw&url=http://in.reuters.com/article/usa-stocks-idINL1N19G2I3',
     'pubDate': 'Fri, 24 Jun 2016 22:26:06 GMT'
    },
    {
      'source': 'USA TODAY',
     'title': '15 US stocks get absolutely crushed by \'Brexit\'',
     'link': 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNF_2t_e0MnsSbUQ-gg5rVFEmelHjA&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779139548883&ei=CrdtV6jaI9jMuQKT0quIAw&url=http://www.usatoday.com/story/money/markets/2016/06/24/7-us-stocks-get-crushed-brexit/86331856/',
     'pubDate': 'Fri, 24 Jun 2016 22:29:00 GMT'
    },
    {
      'source': 'Los Angeles Times',
     'title': 'Uber is making surge pricing more transparent — but a little less obvious',
     'link': 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNGUhMVxqR2UM73xO2fEldBx5BCObg&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779138584803&ei=CrdtV6jaI9jMuQKT0quIAw&url=http://www.latimes.com/business/technology/la-fi-tn-uber-surge-20160624-snap-story.html',
     'pubDate': 'Fri, 24 Jun 2016 22:11:15 GMT'
    },
    {
      'source': 'The Gazette: Eastern Iowa Breaking News and Headlines',
     'title': 'Buying a beer with your book may soon be an option at Barnes & Noble',
     'link': 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNG3XuLZ3YSSWYaXkCVRkZiT8GkU9Q&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779137558849&ei=CrdtV6jaI9jMuQKT0quIAw&url=http://www.thegazette.com/subject/news/business/buying-a-beer-with-your-book-may-soon-be-an-option-at-barnes-noble-20160624',
     'pubDate': 'Fri, 24 Jun 2016 21:16:10 GMT'
    },
    {
      'source': 'Wall Street Journal',
     'title': 'Energy Transfer Can Escape Williams Takeover, Judge Rules',
     'link': 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNFeO3tVQop8kI-2T8XW6Z98eUubLg&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779139031481&ei=CrdtV6jaI9jMuQKT0quIAw&url=http://www.wsj.com/articles/energy-transfer-can-escape-williams-takeover-judge-rules-1466801256',
     'pubDate': 'Fri, 24 Jun 2016 21:28:45 GMT'
    },
    {
      'source': 'BBC News',
     'title': 'Brexit: UK tech sector reacts to Leave vote',
     'link': 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNGh6Ra_sLXiBL_9HJw7hmJa7jE7Xw&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779135478777&ei=CrdtV6jaI9jMuQKT0quIAw&url=http://www.bbc.com/news/technology-36621115',
     'pubDate': 'Fri, 24 Jun 2016 16:08:02 GMT'
    },
    {
      'source': 'Wall Street Journal',
     'title': '\'Brexit\' Gives EU Airlines Bumpy Ride',
     'link': 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNESs0G7jYpdfZ8_d7g4PTHTk--feA&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779138907255&ei=CrdtV6jaI9jMuQKT0quIAw&url=http://www.wsj.com/articles/brexit-gives-eu-airlines-bumpy-ride-1466763652',
     'pubDate': 'Fri, 24 Jun 2016 19:49:45 GMT'
    },
    {
      'source': 'Washington Post',
     'title': 'SEC: Texas CEO used funds on strip clubs, private jets',
     'link': 'http://news.google.com/news/url?sa=t&fd=R&ct2=us&usg=AFQjCNHBOxRCCrzJHlS0Rf3E-KBfHfTixA&clid=c3a7d30bb8a4878e06b80cf16b898331&cid=52779139261374&ei=CrdtV6jaI9jMuQKT0quIAw&url=https://www.washingtonpost.com/national/sec-texas-ceo-used-funds-on-strip-clubs-private-jets/2016/06/24/ddc5750e-3a57-11e6-af02-1df55f0c77ff_story.html',
     'pubDate': 'Fri, 24 Jun 2016 22:09:31 GMT'
    }
  ]

// google news top stories:  https://news.google.com/news?cf=all&hl=en&ned=us&topic=b&output=rss&num=30
// company news by symbol (rss): https://www.google.com/finance/company_news?q=OPWR&output=rss

function refreshNewsItems() {
  store.dispatch(getNewsSuccess(news))
}

class NewsListContainer extends React.Component {
  componentWillMount() {
    refreshNewsItems();
  }

  render() {
    return <NewsList newsItems={this.props.news} />
  }
}

const mapStateToProps = function(store) {
  return {
    news: store.news.headlines
  };
};

export default connect(mapStateToProps)(NewsListContainer);
