import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherResults from './WeatherResults';

class FilterableWeatherSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchQuery: {city: '', state: ''},
          temperature: 50,
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

    onSubmit(temp, icon_id) {
        this.setState({
            temperature: temp,
            icon: 'http://openweathermap.org/img/w/'+icon_id+'.png'
        });
    }

    render() {
        return (
            <div>
            <SearchBar searchQuery={this.state.searchQuery} onSearchQueryChange={this.onSearchQueryChange} onSubmit={this.onSubmit}/>
            <WeatherResults temperature={this.state.temperature} icon={this.state.icon}/>
            </div>
        );
    }
}

export default FilterableWeatherSearch;