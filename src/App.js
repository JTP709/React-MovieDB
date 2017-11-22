import React, { Component } from 'react';
import Movies from './components/movies';
import AddMovies from './components/addmovie';
import SearchMovies from './components/movieSearch';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      search: []
    };
    window.state = this.state;
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  handleAddMovie(movie) {
    this.setState({search:movie});
  }

  handleSelectProject(movie){
    const movies = this.state.movies;
    movies.push(movie);
    this.setState({movies:movies});

  }

  handleDeleteProject(id){
    let movies = this.state.movies;
    let index = movies.findIndex(x => x.id === id);
    movies.splice(index, 1);
    this.setState({movies:movies});
  }

  render() {
    return (
      <div className="App">
        <AddMovies addMovie = {this.handleAddMovie.bind(this)} />
        <SearchMovies search={this.state.search} onSelect={this.handleSelectProject.bind(this)}/>
        <Movies movies={this.state.movies} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
