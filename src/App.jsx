import React,{ useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import Navbar from './components/Navbar';
import counterContext from './context/context';

function App() {
//  const [count,setCount] = useState(0)
//  const [data,setData] = useState(10)
//  useEffect(()=>{
//   console.log("data set is working")

//  },[])
//  const memorizeValue = useMemo(()=>{

// return(
//   <div>
//     <h1>this is count {count} data {data} </h1>
//     {console.log("function runing")}
//   </div>
// )
//  },[data])
//  useCallback(()=>{

//  },[])
// useContext
// Reducer state manage 
// const [state, dispatch]   = useReducer(function,initial state)
//                                         reducer(currentstate,action)
// switch(condition){
//   case condition1:
//     default:
// }
let initialState = 0
function reducer(state , action){
switch(action){
  case "increment":
    return state+1
  case "decrement":
    if(state !== 0 ){
      return state - 1 
    }
    default:
      return state
}
}
const [state,dispatch] = useReducer(reducer,initialState)
  return (
   <div>
    <h1>{state}</h1>
    <button onClick={()=>dispatch("increment")} >increment</button>
    <button onClick={()=>dispatch("decrement")} >decrement</button>











   {/* <counterContext.Provider value={count} >
   <Navbar />

   </counterContext.Provider>
    <button onClick={()=>setCount(count+1)} >increment</button> */}

















    {/* <h1> use memo:  {memorizeValue} </h1>
    <h1>this is react </h1>
<h1>value of COunt { count }</h1>
<h1>{data}</h1>
<button onClick={()=>setCount(count+1)} >increment</button>
<button onClick={()=>setData(data+1)} >increment data</button> */}
   </div>
  );
}

export default App;
