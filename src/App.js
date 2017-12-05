import React, { Component } from 'react';
import FavMovies from './components/favmovies';
import AddMovies from './components/addmovie';
import SearchMovies from './components/movieSearch';
import SelectedMovie from './components/movieSelected.js'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      search: [],
      select: []
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

  handleSelectMovieInfo(movie){
    this.setState({select:movie});
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
        <AddMovies addMovie={this.handleAddMovie.bind(this)} />
        <SearchMovies search={this.state.search} onSelect={this.handleSelectMovie.bind(this)}/>
        <FavMovies movies={this.state.movies} onDelete={this.handleDeleteMovie.bind(this)} onSelect={this.handleSelectMovieInfo.bind(this)}/>
        <SelectedMovie select={this.state.select}/>
      </div>
    );
  }
}

export default App;
