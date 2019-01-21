import React, { Component } from 'react';
import WeatherList from './components/WeatherList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <WeatherList />
      </div >
    );
  }
}

export default App;
