import React from 'react'
import { count } from '../context/Count'
import { useContext } from 'react'

function Counter(props) {

    const countedcontext = useContext(count)
  return (
    <div>
        <h1>count: {props.text} </h1>
        <button onClick={()=>countedcontext.setcounty(countedcontext.county+1)}>Increment</button>
        <button onClick={()=>countedcontext.setcounty(countedcontext.county-1)}>Decrement</button>
    </div>
  )
}

export default Counter