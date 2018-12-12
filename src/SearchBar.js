import React, { Component } from 'react';
import weatherIcons from './weatherIcons.json';
import './css/weather-icons.min.css';
import './css/SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.props.onSearchQueryChange(event)
    }

    handleSubmit(event) {
        fetch(
            process.env.REACT_APP_API_URL+'?q='+this.props.searchQuery.city+','+this.props.searchQuery.country+'&APPID='+process.env.REACT_APP_API_KEY+'&units=imperial')
            .then(response => response.json())
            .then(data => {

                //Code taken from usage demo from https://gist.github.com/tbranyen/62d974681dea8ee0caa1
                var prefix = 'wi wi-';
                var code = data.weather[0].id;
                var icon = weatherIcons[code].icon;
                
                // If we are not in the ranges mentioned above, add a day/night prefix.
                if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                    icon = 'day-' + icon;
                }
                
                // Finally tack on the prefix.
                icon = prefix + icon;
                const location = data.name + ', ' + data.sys.country;
                this.props.onSubmit(data.main.temp, data.weather[0].main, location, icon);
            })
            .catch(function(error) {
                alert("Sorry we couldn't find any weather data matching your query")
            })

        event.preventDefault();
    }

    render() {
      return (
          <form className="Search-Bar-Form" onSubmit={this.handleSubmit}>
            <div className="Search-Bar-Inputs-Container">
              <input className="Search-Bar-Input" name="city" type="text" 
                    placeholder="City..." value={this.props.searchQuery.city} onChange={this.handleInputChange}/>
              <br></br>
              <input className="Search-Bar-Input" name="country" type="text" 
                    placeholder="Country..." value={this.props.searchQuery.country} onChange={this.handleInputChange}/>
              <vr></vr>
              <br></br>
              <input className="Search-Bar-Input-Submit" type="submit" value="Submit"/>
            </div>
          </form>
      );
    }
  }

export default SearchBar;