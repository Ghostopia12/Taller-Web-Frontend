import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import RouterConfig from './RouterConfig'
import Sidenav from './Components/Sidenav/Sidenav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="main">
     <Sidenav/>
     <RouterConfig/>
    </main>
  )
}

export default App
