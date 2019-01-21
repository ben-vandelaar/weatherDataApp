import React, { Component } from 'react';
import { csv } from 'd3-fetch';
import { dataParser } from './utils/dataParser'


class App extends Component {

  state = {
    data: null,
    loading: true,
  }

  componentWillMount() {
    csv('./data/weather.dat')
      .then(data => this.setState({
        data: dataParser(data),
        loading: false
      }));
  }


  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>

      </div >
    );
  }
}

export default App;
