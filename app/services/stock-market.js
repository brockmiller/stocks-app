import axios from 'axios'
import jsonp from 'jsonp'
import { get } from 'lodash'

const modApiBaseUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/'
const modQuoteUrl = (symbol) => `${modApiBaseUrl}Quote/jsonp/?symbol=${symbol}`

export function getCurrentPrice(symbol) {
  return new Promise((resolve, reject) => {
    jsonp(modQuoteUrl(symbol), null, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}


// google news top stories:  https://news.google.com/news?cf=all&hl=en&ned=us&topic=b&output=rss&num=30
// company news by symbol (rss): https://www.google.com/finance/company_news?q=OPWR&output=rss

const googleHeadlinesUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2CpubDate%2Cdescription%20from%20rss%20where%20url%3D%22https%3A%2F%2Fnews.google.com%2Fnews%3Fcf%3Dall%26hl%3Den%26ned%3Dus%26topic%3Db%26output%3Drss%26num%3D25%22&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback='

function normalizeNewsSource(newsList) {
  let re = /(.*) - (.*)/
  return newsList.map((item) => {
    let titleParts = item.title.match(re)
    return {
      ...item,
      title: titleParts[1],
      source: titleParts[2]
    }
  })
}
export function getMarketHeadlines() {
  return axios.get(googleHeadlinesUrl)
    .then((result) => get(result, 'data.query.results.item', []))
    .then(normalizeNewsSource)
}
