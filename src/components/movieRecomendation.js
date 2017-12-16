import React, { Component } from 'react';
import MoviesRecommendedItem from './moviesRecommendedItem';
import PropTypes from 'prop-types';

class MovieRecommendations extends Component {
    
  constructor(){
    super();
    this.state = {
      newMovieRecomendations:{}
    }
  }

  newRecommendedMovie(movies) {

        console.log('Movie Recommended Function Input:')
        console.log(movies);

        //this.props.onUpdate(movies);
  }

  getMovies(mid){
    const apikey = 'fe40a514bfa6aaab071c9c126a0eb70f';
    const query = mid;
    $.ajax({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/'+query+'/recommendations?api_key='+apikey+'&language=en-US&page=1',
      datatype: 'json',
      success: function(data){
        this.setState({results: data}, function(){
          const result = this.state;
          //console.log(result);
          this.pushMovie(result);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  pushMovie(e){
    //console.log('pushMovie executed!')
    const results = e.results.results;
    console.log('Movie Recomendation Results:');
    console.log(results);
    let searchList = {newMovieRecomendations:[]};
    for (let i=0; i<results.length; i++) {
      //console.log('Movie Looped!');
      const m = results[i];
      //console.log('Looped Results:')
      //console.log(m);
      const movieItem = {
            uid: uuid.v4(),
            mid: m.id,
            title: m.title,
            overview: m.overview,
            rating: m.vote_average,
            poster: 'https://image.tmdb.org/t/p'+m.poster_path,
            date: m.release_date
          };
      console.log('SearchList:');
      console.log(searchList.newMovieRecomendations);
      searchList.newMovieRecomendations.push(movieItem);
    }
    this.setState(
      searchList, function(){
        this.props.addMovie(this.state.newMovieRecomendations);
        //console.log('Movie Added');
      }
    );
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
                    <MoviesRecommendedItem key={recomendations.mid} movies={recomendations} />
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
