import React, { useState } from "react";

function Todoitem(props) {
const [check,setcheck]= useState(false)

const handlecheck = ()=>{
setcheck(!check)
}

  return (
    <div className="todo-li">
        <span>
      <input type="checkbox" checked={check} onChange={handlecheck}/>
      <span style={{textDecoration: check?'line-through':'none'}}>{props.text}</span>
      </span>
      <p>...</p>
    </div>
  );
}

export default Todoitem;
