import React from 'react'

const Todo = ({todo, handleClick, className}) => {
  return (
    <li className={className} onClick={(e) => {handleClick(e)}}>{todo}</li>
  )
}

export default Todo
