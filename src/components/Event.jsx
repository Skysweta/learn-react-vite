import React from 'react'

const Event = () => {
    const handleClick= () =>{
        alert('you click the button');
    }

    const addition =(a) =>{ // if your function takes parameter pass it in a callback
         alert(a+10)
    }
  return (
    <div>
        <h1>We are Learning Events</h1>
        <button onClick={handleClick}>Click this button</button>
        <button onClick={()=>addition(110)}> Button 2</button>
    </div>
  )
}

export default Event