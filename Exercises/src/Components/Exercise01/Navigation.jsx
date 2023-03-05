import React from 'react'

const Navigation = (props) => {
  return (
      <ul className={props.name}>
        <a className='navitem'><li>Home</li></a>
        <a className='navitem'><li>About</li></a>
        <a className='navitem'><li>Contact</li></a>
      </ul>
  )
}

export default Navigation
