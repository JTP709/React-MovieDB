import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import $ from 'jquery';

class AddMovies extends Component {
  constructor(){
    super();
    this.state = {
      newMovie:{}
    }
  }

  getMovies(m){
    const apikey = 'fe40a514bfa6aaab071c9c126a0eb70f';
    const query = encodeURI(m);
    $.ajax({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie?api_key='+apikey+'&language=en-US&query='+query+'&include_adult=false',
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
    console.log('Movie Results:');
    console.log(results);
    let searchList = {newMovie:[]};
    for (let i=0; i<results.length; i++) {
      //console.log('Movie Looped!');
      const m = results[i];
      //console.log('Looped Results:')
      //console.log(m);
      const movieItem = {
            id: uuid.v4(),
            title: m.title,
            overview: m.overview,
            rating: m.vote_average
          };
      console.log('SearchList:');
      console.log(searchList.newMovie);
      searchList.newMovie.push(movieItem);
    }
    this.setState(
      searchList, function(){
        this.props.addMovie(this.state.newMovie);
        //console.log('Movie Added');
      }
    );
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('title is required');
    } else {
      const search = this.refs.title.value;
      const result = this.getMovies(search);
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Add Movie</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Title</label>
              <br />
              <input type='text' ref="title" />
            </div>
            <br />
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

// Properties Type validation
AddMovies.propTypes = {
    getMovies: PropTypes.func
}

export default AddMovies;
