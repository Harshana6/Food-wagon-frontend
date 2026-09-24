import { useState } from 'react'
import './assets/style/style.css'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Home></Home>
   </div>
  )
}

export default App
