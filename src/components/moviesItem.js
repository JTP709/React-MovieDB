import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoviesItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    console.log('Movie Item');
    console.log(this.props.movies);
    return (
      <li className="MoviesItem">
        {this.props.movies.title} - {this.props.movies.rating} <a href="#" onClick={this.deleteProject.bind(this, this.props.movies.id)}>X</a>
      </li>
    );
  }
}

// Properties Type validation
MoviesItem.propTypes = {
    movies: PropTypes.object,
    onDelete: PropTypes.func
}

export default MoviesItem;