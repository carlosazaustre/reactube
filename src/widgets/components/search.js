import React from 'react';
import './search.css';

function Search(props) {
  return (
    <form 
      className="Search"
      onSubmit={props.handleSubmit}
    >
      <input 
        ref={props.setRef}
        type="text"
        className="Search-input"
        placeholder="Search your favorite video"
        name="search"
        onChange={props.handleChange}
        value={props.value}
      />
    </form>
  );
}

export default Search;