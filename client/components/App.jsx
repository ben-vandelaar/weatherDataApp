import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions/index";
import { ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  componentDidMount() {
    this.props.dispatch(getWeather());

  }

  sortData = () => {
    const { weatherData } = this.props;
    weatherData.sort((a, b) => a[3] - b[3])
    this.setState({ weatherData })
  }


  render() {
    const { weatherData } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <h1>Little Weather App</h1>
            <button onClick={this.sortData}>Sort weather</button>
          </Row>
          <div className="max">
            <Row>
              <Col xs='6' md='4'>
                <ListGroup>
                  {weatherData.map((i) => (
                    <ListGroupItem className="justify-content-between" key={i[0]} style={{ listStyleType: "none" }}>
                      <h3>Day:{i[0]}</h3>
                      <p>Max Temperature: {i[1]}</p>
                      <p>Min Temperature: {i[2]}</p>
                      <p>Difference in Temperature: {i[3]}</p>
                      <br />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </div>
        </Container>

      </div >
    );

  }
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData,
  };
};

export default connect(mapStateToProps)(App);
