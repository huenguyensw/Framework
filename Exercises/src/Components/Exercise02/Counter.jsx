import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
      setCount(count+1);
  }
  
  const reset = () =>{
    setCount(0);
  }
  return (
    <div >
      <div><button onClick={increase}>Counter: {count}</button></div>
      <br />
      <button onClick={reset}>Reset Counter</button>
    </div>
    
  )
}

export default Counter
