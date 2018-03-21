import React, { Component } from 'react';
import './App.css';
import Tickers from './components/Tickers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ticker</h2>
        </div>
        <Tickers />
      </div>
    );
  }
}

export default App;
