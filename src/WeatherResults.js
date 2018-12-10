import React, { Component } from 'react';
import './WeatherResults.css';

class WeatherResults extends Component {
    render() {
      return (
          <div className='Weather-Results-weather-container'>
            <div className='Weather-Results-weather-h1'>
              <h1><i class={this.props.icon}></i></h1>
              {this.props.temperature != '' ? <h1>{this.props.temperature}&#176; </h1>: null}
              <h2>{this.props.weatherDescription}</h2>
              <br></br>
              {this.props.temperature != '' ? <h3>{this.props.location}</h3>: null}
            </div>
          </div>
      )
    }
}

export default WeatherResults;