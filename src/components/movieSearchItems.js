import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchMoviesItem extends Component {
  selectProject(m) {
    this.props.onSelect(m);
  }
  render() {
    return (
      <li className="MoviesItem">
        {this.props.search.title} - {this.props.search.rating} <a href="#" onClick={this.selectProject.bind(this, this.props.search)}>Add</a>
      </li>
    );
  }
}

// Properties Type validation
SearchMoviesItem.propTypes = {
    search: PropTypes.object,
    onDelete: PropTypes.func
}

export default SearchMoviesItem;