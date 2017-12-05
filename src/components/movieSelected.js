import React, { Component } from 'react';
import MoviesRecommendedItem from './moviesRecommendedItem';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import $ from 'jquery';

class MovieSelected extends Component {

  constructor(){
    super();
    this.state = {
      recomendations:[]
    }
  }

  getMovies(mid){
    console.log('get recomended movies executed');
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
    console.log('movie recomendations pushed');
    //console.log('pushMovie executed!')
    const results = e.results.results;
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
            poster: 'https://image.tmdb.org/t/p/w640'+m.poster_path,
            date: m.release_date
          };
      searchList.newMovieRecomendations.push(movieItem);
    }
    this.setState(
      {recomendations:searchList.newMovieRecomendations}
    );
  }

  render() {
    console.log('movie info rendered');
    let mid = this.props.select.mid;
    this.getMovies(mid);
    let moviesItems;
    if(this.state.recomendations) {
        moviesItems = this.state.recomendations.map(recomendations => {
            //console.log('movies.js - movies');
            //console.log(movies);
            return (
                <MoviesRecommendedItem key={recomendations.uuid} movies={recomendations} />
            );
        });
    }

    return (
        <div className="Movies">
            <h3>Movie Info</h3>
            <img src={this.props.select.poster}/>
            <p><b>{this.props.select.title}</b></p>
            <p>{this.props.select.overview}</p>
            <p>{this.props.select.rating}</p>
            <p>{this.props.select.date}</p>
            <h4>Recomended Movies</h4>
            {moviesItems}
        </div>
    );
  }
}

// Properties Type validation
MovieSelected.propTypes = {
    movies: PropTypes.array,
    onDelete: PropTypes.func
}

export default MovieSelected;
