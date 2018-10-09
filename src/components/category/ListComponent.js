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
