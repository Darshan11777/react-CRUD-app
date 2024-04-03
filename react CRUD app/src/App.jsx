import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  // 1.home 
  // 2.input
  // 3.show data
  // 4.css
  return (
    <>
    <div className="">

    <h1>CRUD App with React</h1>
    <Home/>
    </div>
    {/* <Form/> */}
    </>
  )
}

export default App
