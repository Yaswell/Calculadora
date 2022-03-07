import React from 'react'

const Actions = ({digit, id, onclick}) => {
  return (
    <button id={id} onClick={onclick} value={digit} className='action'>{digit}</button>
  )
}

export default Actions