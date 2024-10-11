import React from "react"
import { useState,useEffect } from "react"

function Counter() {
const [count,setcount] = useState(0)
const [value,setvalue] = useState("hello world")

useEffect(()=>{
    console.log("app is mounting");
},[count])
  return (
    <div>
        <h4>Count:{count}</h4>
        <h4>Value:{value}</h4>
        <button onClick={()=> setvalue("hello react")}>Change</button>
        <button onClick={()=> setcount(count+1)}>Increment</button>
        <button onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter  