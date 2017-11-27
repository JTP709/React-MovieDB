import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoviesRecommendedItem extends Component {
  render() {
    return (
      <li className="MoviesItem">
        {this.props.movies.title}
      </li>
    );
  }
}

// Properties Type validation
MoviesRecommendedItem.propTypes = {
    movies: PropTypes.object,
    onDelete: PropTypes.func
}

export default MoviesRecommendedItem;