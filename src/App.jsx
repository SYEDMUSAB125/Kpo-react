import React,{ useCallback, useEffect, useMemo, useState } from 'react';

function App() {
 const [count,setCount] = useState(0)
 const [data,setData] = useState(10)
//  useEffect(()=>{
//   console.log("data set is working")

//  },[])
 const memorizeValue = useMemo(()=>{

return(
  <div>
    <h1>this is count {count} data {data} </h1>
    {console.log("function runing")}
  </div>
)
 },[data])
//  useCallback(()=>{

//  },[])
  return (
   <div>
    <h1> use memo:  {memorizeValue} </h1>
    <h1>this is react </h1>
<h1>value of COunt { count }</h1>
<h1>{data}</h1>
<button onClick={()=>setCount(count+1)} >increment</button>
<button onClick={()=>setData(data+1)} >increment data</button>
   </div>
  );
}

export default App;
