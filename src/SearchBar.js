import React, { Component } from 'react';
import './SearchBar.css'

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
            'http://api.openweathermap.org/data/2.5/weather?q='+this.props.searchQuery.city+','+this.props.searchQuery.country+'&APPID='+process.env.REACT_APP_API_KEY+'&units=imperial')
            .then(response => response.json())
            .then(data => {
                const location = data.name + ', ' + data.sys.country;
                this.props.onSubmit(data.main.temp, data.weather[0].main, location);
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