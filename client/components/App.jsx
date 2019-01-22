import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions/index";
import { ListGroup, ListGroupItem, Container, Row } from 'reactstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  componentDidMount() {
    this.props.dispatch(getWeather());
  }


  render() {
    const { weatherData } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <h1>Little Weather App</h1>
          </Row>
          <ListGroup>
            {weatherData.map((i) => (
              <ListGroupItem className="justify-content-between" key={i[0]} style={{ listStyleType: "none" }}>
                <h3>Day:{i[0]}</h3>
                <p>Max Temperature{i[1]}</p>
                <p>Min Temperature{i[2]}</p>
                <p>Difference in Temperature{i[3]}</p>
                <hr />
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
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
