import React from 'react'

function Square(props) {
  return (
    <div className='squares' onClick={props.onClick}>
        <h1>{props.value}</h1>
    </div>
  )
}

export default Square