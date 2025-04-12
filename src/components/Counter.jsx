import React, { useState } from 'react'

const Counter = () => {
    
    const[counter ,setCounter] =useState(0);

    const increaseBy1 = () => {
        // counter++;
        setCounter(counter+1);
        console.log("counter =" , counter);

    };
    const decreaseBy1 = () => {
        // counter--;
        setCounter(counter-1);
        console.log("counter =" , counter);

    };

  return (
    <div>
       <h1>{counter}</h1>
       <button onClick ={ increaseBy1}>Increase</button>
       <button onClick ={ decreaseBy1}>Decrease</button>

    </div>
  )
}

export default Counter