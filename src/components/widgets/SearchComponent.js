import React from 'react';
import PropTypes from 'prop-types';

// import './search.styl';


const SearchComponent = (props) => {
  const { query, handleInputChange, handleSubmit } = props;

  return (
    <form action="" onSubmit={handleSubmit} className="Search">
      <input
        type="text"
        name="search"
        value={query}
        onChange={handleInputChange}
        className="Search-input"
        placeholder="Busca tu video favorito"
      />
    </form>
  );
};

SearchComponent.propTypes = {
  query: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchComponent;
