import React, { Component } from 'react';
import MoviesItem from './moviesItem';
import PropTypes from 'prop-types';

class FavMovies extends Component {

    deleteMovie(id) {
        this.props.onDelete(id);
    }

    selectMovieInfo(movie) {
        this.props.onSelect(movie);
    }

    render() {
        let moviesItems;
        if(this.props.movies) {
            moviesItems = this.props.movies.map(movies => {
                //console.log('movies.js - movies');
                //console.log(movies);
                return (
                    <MoviesItem onDelete={this.deleteMovie.bind(this)} onSelectInfo={this.selectMovieInfo.bind(this)} key={movies.mid} movies={movies} />
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
FavMovies.propTypes = {
    movies: PropTypes.array,
    onDelete: PropTypes.func
}

export default FavMovies;
