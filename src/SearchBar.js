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
            'http://api.openweathermap.org/data/2.5/weather?q='+this.props.searchQuery.city+',us&APPID=<UTILIZE_ENV_FILE_FOR_KEY>&units=imperial')
            .then(response => response.json())
            .then(data => {
                this.props.onSubmit(data.main.temp, data.weather[0].icon);
            })
            .catch(function(error) {
                alert(error)
            })

        event.preventDefault();
    }

    render() {
      return (
          <form className="Search-Bar-Form" onSubmit={this.handleSubmit}>
            <div className="Search-Bar-Inputs-Container">
              City: <input className="Search-Bar-Input" name="city" type="text" value={this.props.searchQuery.city} onChange={this.handleInputChange}/>
              State: <input className="Search-Bar-Input" name="city" type="text" value={this.props.searchQuery.state} onChange={this.handleInputChange}/>
              <input type="submit" value="Submit"/>
            </div>
          </form>
      );
    }
  }

export default SearchBar;