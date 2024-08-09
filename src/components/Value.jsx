import React, { useContext } from 'react';
import SelfContext from '../context/context';

function Value() {
 const value = useContext(SelfContext);
  return (
    <div>
      {value.count}
    </div>
  );
}

export default Value;
