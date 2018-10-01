import React, { Component } from 'react';
import SearchComponent from '../../components/widgets/SearchComponent';


class SearchContainer extends Component {
  state = {
    query: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;

    return (
      <SearchComponent
        query={query}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SearchContainer;
