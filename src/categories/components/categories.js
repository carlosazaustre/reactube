import React from 'react';

function Categories(props) {
  return (
    <div>
      {
        props.categories.map((item) => {
          return <Category />;
        })
      }
    </div>
  );
}

export default Categories;