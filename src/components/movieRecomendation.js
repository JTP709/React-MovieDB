import React, { Component } from 'react';
import MoviesRecommendedItem from './moviesRecommendedItem';
import PropTypes from 'prop-types';

class MovieRecommendations extends Component {

    newRecommendedMovie(movies) {

        console.log('Movie Recommended Function Input:')
        console.log(movies);



        //this.props.onUpdate(movies);
    }

    render() {
        let moviesList = this.props.movies;
        const movieUpdate = this.newRecommendedMovie(moviesList);
        let moviesItems;
        if(this.props.recomendations) {
            moviesItems = this.props.recomendations.map(recomendations => {
                //console.log('movies.js - movies');
                //console.log(movies);
                return (
                    <MoviesRecommendedItem key={recomendations.title} movies={recomendations} />
                );
            });
        }

        return (
            <div className="Movies">
                <h3>Recommended Movies</h3>
                {moviesItems}
            </div>
        );
    }
}

// Properties Type validation
MovieRecommendations.propTypes = {
    movies: PropTypes.array,
    onDelete: PropTypes.func
}

export default MovieRecommendations;
