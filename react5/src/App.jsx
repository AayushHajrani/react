import { useState, useEffect } from 'react'
import { Todoprovider } from './context'
import Todoform from './components/Todoform'
import Todoitem from './components/Todoitem'
import { usetodo } from './context'

function App() {
  const [todo, settodo] = useState([])

  const addtodo = (todo) => {
    settodo((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updatetodo = (id, todo) => {
    settodo((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)))
  }

  const deletetodo = (id) => {
    settodo((prev) => prev.filter((todo) => todo.id !== id))
  }

  const togglecomplete = (id) => {
    settodo((prev) => prev.map((prevtodo) => prevtodo.id === id ?
      { ...prevtodo, completed: !prevtodo.completed } : prevtodo))
  }

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo"))
    
    if (todo && todo.length > 0) {
      settodo(todo)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
   
  }, [todo])


  return (
    <Todoprovider value={{ updatetodo, addtodo, deletetodo, togglecomplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <Todoform />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((singletodo) => (
              <div key={singletodo.id}
                className='w-full'
              >
                <Todoitem todo={singletodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
