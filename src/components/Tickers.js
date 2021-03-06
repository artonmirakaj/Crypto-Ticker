import React, { Component } from 'react';
import axios from 'axios';
import Cryptocurrency from './Cryptocurrency';
import './Tickers.css';

class Tickers extends Component {

  fetchCryptocurrencyData() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      .then(response => {
        const wanted = ["bitcoin", "ethereum", "litecoin"];
        let result = response.data.filter(currency => wanted.includes(currency.id));
        this.setState({ data: result });
      })
      .catch(err => console.log(err));
    };

    componentDidMount() {
      this.fetchCryptocurrencyData();
      this.interval = setInterval(() => this.fetchCryptocurrencyData(), 1 * 1000);
    };

    state = {
      data: [
        {
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "BTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24hr: "0",
          percent_change_7d: "0",
        },

        {
          id: "ethereum",
          name: "Ethereum",
          symbol: "ETH",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24hr: "0",
          percent_change_7d: "0",
        },

        {
          id: "litecoin",
          name: "Litecoin",
          symbol: "LTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24hr: "0",
          percent_change_7d: "0",
        }
      ]
    }

    render() {
      const tickers = this.state.data.map((currency) => {
        return <Cryptocurrency data={currency} key={currency.id} />
      });

      return (
        <div className="tickers-containers">
          <ul className="tickers">{tickers}</ul>
          <p>Updates every 10 seconds</p>
        </div>
      );
    }
}

export default Tickers;