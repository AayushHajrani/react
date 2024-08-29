import React, { useState } from 'react'
import { usetodo } from './context/index';

function Todoitem({todo}) {

const {updatetodo,deletetodo,togglecomplete} = usetodo()
const [edit,setedit] = useState(false)
const [msg,setmsg] = useState([todo.todo])

const editTodo = () =>{
    updatetodo(todo.id, {...todo,todo:msg})
    setedit(false)
}

const toggleCompleted = ()=>{
    togglecomplete(todo.id)
}

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    edit ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={msg}
                onChange={(e) => setmsg(e.target.value)}
                readOnly={!edit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
  
                    if (edit) {
                        editTodo();
                    } else setedit((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {edit ? "📁" : "✏"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletetodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
  }
  
  export default Todoitem;