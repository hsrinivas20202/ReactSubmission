import React from 'react';
import '../../styles.css';

const Dropdown = props => {
  const opts = props.opts;
  const filterType = props.name;

  return (
    <form >
      <label>Filter by {filterType}</label>
      <select name={filterType} onChange={props.selectHandler}>
        <option value="" defaultValue="">
          All
        </option>
        {opts.map(item => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default Dropdown;
