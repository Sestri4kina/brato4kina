import React from 'react';

export default ({title, handleClick}) => (
  <span onClick={handleClick} className="button">
    {title}
  </span>
)
