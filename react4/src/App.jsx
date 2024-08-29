import { useState, useEffect } from 'react'
import { Themeprovider } from './context/theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/card'

// import UserContextprovider from './context/usercontextprovider'
// import Login from './components/Login'
// import Profile from './components/profile'


function App() {

  const [thememode, setthememode ] = useState("light")

  const darkmode = () => {
    setthememode("dark")
  }

  const lightmode = () => {
    setthememode("light")
  }

  useEffect(() => {
    const mode = document.querySelector("html")
    mode.classList.remove("light", "dark");
    mode.classList.add(thememode);
  }, [thememode])

  return (
    // <UserContextprovider>
    //   <h1>context project</h1>
    //   <Login />
    //   <Profile />
    // </UserContextprovider>

    <Themeprovider value={{ thememode, darkmode, lightmode }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </Themeprovider>
  )
}

export default App;
