import React from 'react';
import CategoryComponent from './CategoryComponent';


const List = (props) => {
  const { data } = props;

  return (
    <div>
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