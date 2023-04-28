import { useState } from 'react'
import Cabecera from './componentes/cabecera/cabecera'
import Main from './componentes/main/main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cabecera/>
    <Main/>   
  
    </>
  )
}

export default App
