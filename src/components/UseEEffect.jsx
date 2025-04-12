import React from 'react'
import { useEffect ,useState } from 'react';

const UseEEffect = () => {
    const[counter , setCounter] = useState(10);
    useEffect(()=> {
      document.title = counter
      console.log("useEffect is running..!");
   
    },[counter]);
  return (
    <div>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Increase</button>
    </div> );
}

export default UseEEffect