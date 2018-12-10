import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherResults from './WeatherResults';
import { capitalizeFirstLetter } from './helpers/StringFormatting';


class FilterableWeatherSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchQuery: {city: '', country: ''},
          temperature: '',
          weatherDescription: '',
          location: '',
          icon: ''
        };

        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSearchQueryChange(event) {
        const searchQuery = {...this.state.searchQuery};
        searchQuery[event.target.name] = event.target.value;
        this.setState({
            searchQuery
        });
    }

    onSubmit(temp, descr, location, icon) {
        this.setState({
            temperature: Math.floor(temp),
            weatherDescription: capitalizeFirstLetter(descr),
            location: location,
            icon: icon
        });
    }

    render() {
        return (
            <div>
            <SearchBar searchQuery={this.state.searchQuery} onSearchQueryChange={this.onSearchQueryChange} onSubmit={this.onSubmit}/>
            <WeatherResults temperature={this.state.temperature} weatherDescription={this.state.weatherDescription} 
                location={this.state.location} icon={this.state.icon}/>
            </div>
        );
    }
}

export default FilterableWeatherSearch;