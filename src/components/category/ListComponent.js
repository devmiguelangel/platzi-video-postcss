import React from 'react';
import CategoryComponent from './CategoryComponent';

import './categories.styl';


const List = (props) => {
  const { data } = props;

  return (
    <div className="Categories">
      {
        data.categories.map(item => {
          return (
            <CategoryComponent key={item.id} {...item} />
          )
        })
      }
    </div>
  )
}

export default List;