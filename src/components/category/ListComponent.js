import React from 'react';
import PropTypes from 'prop-types';
import CategoryComponent from './CategoryComponent';
import SearchContainer from '../../containers/widgets/SearchContainer';

// import './categories.styl';


const List = (props) => {
  const { data, handleVisibleModal } = props;

  return (
    <div className="Categories">
      <SearchContainer />
      <p>
        <span>
          <label htmlFor="name" className="radio-label">
            Nombre
            <input type="radio" id="name" name="filtro" className="radio" />
          </label>
        </span>
        <span>
          <label htmlFor="type" className="radio-label">
            Tipo
            <input type="radio" id="type" className="radio" name="filtro" />
          </label>
        </span>
      </p>

      <label htmlFor="destacados" className="checkbox-label">
        Ocultar
        <input type="checkbox" id="destacados" className="checkbox" />
      </label>
      {
        data.categories.map(item => (
          <CategoryComponent
            key={item.id}
            {...item}
            handleVisibleModal={handleVisibleModal}
          />
        ))
      }
    </div>
  );
};

List.propTypes = {
  data: PropTypes.object.isRequired,
  handleVisibleModal: PropTypes.func.isRequired,
};

export default List;
