import React, { Component } from 'react';
import SearchMoviesItem from './movieSearchItems';
import PropTypes from 'prop-types';

class SearchMovies extends Component {

    selectMovie(m) {
        this.props.onSelect(m);
    }

    render() {
        let searchItems;
        if(this.props.search) {
            searchItems = this.props.search.map(search => {
                //console.log('movies.js - movies');
                //console.log(movies);
                return (
                    <SearchMoviesItem onSelect={this.selectMovie.bind(this)} key={search.mid} search={search} />
                );
            });
        }

        return (
            <div className="Movies">
                <h3>Search Results</h3>
                {searchItems}
            </div>
        );
    }
}

// Properties Type validation
SearchMovies.propTypes = {
    movies: PropTypes.array,
    onDelete: PropTypes.func
}

export default SearchMovies;
