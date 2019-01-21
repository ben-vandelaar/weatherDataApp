import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions/index";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  componentDidMount() {
    this.props.dispatch(getWeather());
  }



  render() {
    const { weatherData } = this.props;
    return (
      <div>
        <h1>Little Weather App</h1>
        <p>{weatherData}</p>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData,
  };
};

export default connect(mapStateToProps)(App);
