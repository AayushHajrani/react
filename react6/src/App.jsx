import { useState } from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import { store } from './app/Store'
import { Provider } from 'react-redux'

function App() {


  return (
   <Provider store={store}>
   <h1 className='text-white text-x1'> Todo app with react redux</h1>
   <Addtodo/>
   <Todos/>
   </Provider>
  )
}

export default App
