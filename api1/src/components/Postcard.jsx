import React from 'react'


function Postcard(props) {
  return (
    <div className='postcard'>
        <h4>{props.title}</h4>
        <p>{props.body}</p>
    </div>
  )
}

export default Postcard