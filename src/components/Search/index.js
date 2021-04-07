import React, { useState } from 'react';
import '../../styles.css';


const Search = ({ formHandler, clearSearch }) => {
  const [formValue, setFormValues] = useState('');

  const handleChange = e => {
    setFormValues(e.target.value);
  };

  const handleSubmit = e => {
    e.persist();
    formHandler(formValue);
    e.preventDefault();
  };

  const handleClear = () => {
    clearSearch();
    setFormValues('');
  };

  return (
    <div className="search">
      <div >

        <form onSubmit={handleSubmit} style={{ display: 'contents' }}>
          Search:
          <input
            className="search-bar"
            type="text"
            value={formValue}
            placeholder="please enter searchkeyword"
            onChange={handleChange}
          />
        </form>
        <button className="reset" onClick={handleClear}>Reset Filters</button>
      </div>
    </div>
  );
};

export default Search;
