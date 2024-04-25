import { useState, useEffect } from 'react'

import './App.css'

const App = () => {
  console.log('Se renderiza App')

  const [contador, setContador] = useState(0);
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log('Ejecutando useEffect')

    setInterval(() => {
      console.log('Set interval')
      setHora(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  function handleClick() {
    setContador(contador + 1)
  }




  return (
    <>
      <div id="uno">
        <h1>{`contador ${contador}`}</h1>
        <button onClick={handleClick}>click</button>
      </div>

      <div id="dos">
        <h1>Hora actual CDMX</h1>
        <h1>{hora}</h1>
      </div>
    </>

  )
}

export default App

