import React, { useContext } from 'react';
import counterContext from '../context/context';

function Value() {
   const data =  useContext(counterContext)
  return (
    <div>
      <h1>
        {data}
      </h1>
    </div>
  );
}

export default Value;
