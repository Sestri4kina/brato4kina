import React from 'react';

export default ({alive, newBorn, handleClick}) => (
  <td
    onClick={handleClick}
    className={`${alive ? 'alive' : ''} ${newBorn ? 'newBorn' : ''}`}
  >
  </td>
)
