import { useState } from 'react'
import './App.css'
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
