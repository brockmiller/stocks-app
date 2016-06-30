import axios from 'axios'
import jsonp from 'jsonp'

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
