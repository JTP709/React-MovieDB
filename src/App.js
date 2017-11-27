import React, { Component } from 'react';
import Movies from './components/movies';
import AddMovies from './components/addmovie';
import SearchMovies from './components/movieSearch';
import MovieRecommendations from './components/movieRecomendation.js'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      search: [],
      recomendations:[]
    };
    window.state = this.state;
  }

  handleAddMovie(movie) {
    this.setState({search:movie});
  }

  handleSelectMovie(movie){
    const movies = this.state.movies;
    movies.push(movie);
    this.setState({movies:movies});

  }

  handleMovieRecomendations(movie){
    const movies = this.state.recomendations;
    movies.push(movie);
    console.log('Movie Recommendation Handler:');
    console.log(movie);
    console.log(movies);
    this.setState({recomendations:movies});
  }

  handleDeleteMovie(id){
    let movies = this.state.movies;
    let index = movies.findIndex(x => x.id === id);
    movies.splice(index, 1);
    this.setState({movies:movies});
  }

  render() {
    return (
      <div className="App">
        <AddMovies addMovie = {this.handleAddMovie.bind(this)} />
        <SearchMovies search={this.state.search} onSelect={this.handleSelectMovie.bind(this)}/>
        <Movies movies={this.state.movies} onDelete={this.handleDeleteMovie.bind(this)}/>
        <MovieRecommendations movies={this.state.movies} recomendations = {this.state.recomendations} onUpdate={this.handleMovieRecomendations.bind(this)}/>
      </div>
    );
  }
}

export default App;
