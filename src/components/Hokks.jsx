import React, { useEffect, useMemo, useState } from 'react';

function Hokks() {
    const [count ,setCount]  = useState(0);
    const [data ,setData]  = useState(10);
//  useEffect(()=>{
//     const array = new Array(1000000000).fill(0)
//     console.log(array)
//     // console.log("soory working")
//  },[count]) 
//  useEffect(()=>{
//     console.log("data increase") 
//  },[data]) 
 const control = useMemo(()=>{
    return(
        <div>
            <h1 style={{color:"red"}} >Count in memo: {count} data {data} </h1>
        </div>
    )
 },[count])
  return (
    <div>
       

    {control}

  <h1>Count: {count}</h1>
  <h1>Data: {data}</h1>

  <button onClick={()=>{setCount(count+1)}} >increment count</button>
  <button onClick={()=>{setData(data+10)}} >increment data</button>
    </div>
  );
}

export default Hokks;
