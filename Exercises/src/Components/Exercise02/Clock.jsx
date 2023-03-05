import React, {date, useEffect, useState} from 'react'

const Clock = () => {
    const [date, setDate] = useState(new Date());
    let timerID = "";

    useEffect(()=> {timerID = setInterval(tick,1000)});
    function tick(){
        setDate(new Date());
    }


  return (
      <div>{date.toLocaleTimeString()}</div>
  )
}

export default Clock
