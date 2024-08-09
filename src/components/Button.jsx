import React, { useContext } from 'react';
import Value from './Value';
import SelfContext from '../context/context';
function Button() {
    const value = useContext(SelfContext);
  return (
    <div>
        <span><Value /></span>
      <button onClick={()=> value.setCount(value.count+1)} type="button">increment</button>
    </div>
  );
}

export default Button;
