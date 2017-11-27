import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoviesItem extends Component {
  deleteMovie(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="MoviesItem">
        {this.props.movies.title} - <a href="#" onClick={this.deleteMovie.bind(this, this.props.movies.id)}>X</a>
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