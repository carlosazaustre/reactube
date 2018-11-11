import React from 'react';
import Category from './category';
import Search from '../../widgets/containers/search';
import './categories.css';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.categories.map((item) => {
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          );
        })
      }
    </div>
  );
}

export default Categories;