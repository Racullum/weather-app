import React, { Component } from 'react';
import './WeatherResults.css';

class WeatherResults extends Component {
    render() {
      return (
          <div className='Weather-Results-weather-container'>
            <img src={this.props.icon}></img>
            <h1>{this.props.temperature}</h1>
          </div>
      )
    }
}

export default WeatherResults;