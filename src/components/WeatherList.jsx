import React, { Component } from 'react';
// import { ListGroup, Container } from 'reactstrap';
import {
    maxMinArr,
    sortedArr
} from '../data/dataParser';

class WeatherList extends Component {
    render() {
        return (
            <div>
                {console.log(maxMinArr, sortedArr)}
            </div >
        );
    }
}

export default WeatherList;
