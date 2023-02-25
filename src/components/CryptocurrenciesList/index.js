// Write your JS code here

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrenciesList} = this.props

    return (
      <div className="cryptocurrency-container">
        <h1 className="cryptocurrency-title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        <div className="cryptocurrencies-list-container">
          <div className="list-header">
            <p className="list-coin-type-heading">Coin Type</p>
            <div className="usd-and-euro-values-container">
              <p className="list-coin-value-heading">USD</p>
              <p className="list-coin-value-heading">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrencies-list">
            {cryptocurrenciesList.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                cryptocurrencyDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
