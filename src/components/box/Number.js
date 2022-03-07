import React from 'react'

const Number = ({digit, onClick}) => {
  return (
    <button value={digit} onClick={onClick} className='digit'>{digit}</button>
  )
}

export default Number