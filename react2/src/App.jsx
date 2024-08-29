import { useState } from 'react'

function App() {

  let [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center top-52 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center top-20 gap-3
           shadow-lg bg-white px-5 py-5 rounded'>

            {/* <h1 className='text-2xl size-20 inset-x-0 w-40'>Color Changer</h1> */}

          <button onClick={()=>  setcolor("red")} className='outline-none px-4 py-1 
          rounded text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={()=>  setcolor("green")}  className='outline-none px-4 py-1 
          rounded text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={()=>  setcolor("blue")}  className='outline-none px-4 py-1 
          rounded text-white shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>

          <button onClick={()=>  setcolor("yellow")}  className='outline-none px-4 py-1 
          rounded text-white shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button onClick={()=>  setcolor("purple")}  className='outline-none px-4 py-1 
          rounded text-white shadow-lg' style={{ backgroundColor: "purple" }}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
