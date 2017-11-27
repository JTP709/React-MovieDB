import React, { Component } from 'react';
import MoviesItem from './moviesItem';
import PropTypes from 'prop-types';

class Movies extends Component {

    deleteMovie(id) {
        this.props.onDelete(id);
    }

    render() {
        let moviesItems;
        if(this.props.movies) {
            moviesItems = this.props.movies.map(movies => {
                //console.log('movies.js - movies');
                //console.log(movies);
                return (
                    <MoviesItem onDelete={this.deleteMovie.bind(this)} key={movies.id} movies={movies} />
                );
            });
        }

        return (
            <div className="Movies">
                <h3>Favorite Movies</h3>
                {moviesItems}
            </div>
        );
    }
}

// Properties Type validation
Movies.propTypes = {
    movies: PropTypes.array,
    onDelete: PropTypes.func
}

export default Movies;
