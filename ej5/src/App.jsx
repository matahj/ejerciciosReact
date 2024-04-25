import { useState, useEffect } from 'react';

import './App.css'

function App() {
  //console.log('Renderizando App')

  const [contador, setContador] = useState(0)

  const [hora, setHora] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    //console.log('Ejectuando useEffect')

    setInterval(() => {
      //console.log('Ejecutando interval')
      setHora(new Date().toLocaleTimeString())
    }, 1000)

  }, [])

  const [razas, setRazas] = useState(['raza 1', 'raza 2', 'raza 3']);
  const [razaSeleccionada, setRazaSeleccionada] = useState('mexicanhairless');
  const [imgRaza, setImgRaza] = useState(null);

  useEffect(() => {
    //traer la lista de razas
    //Petcición GET
    fetch(' https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      //.then(data => console.log(Object.keys(data.message)))
      .then(data => setRazas(Object.keys(data.message)))
  }, [])

  useEffect(() => {
    console.log(`consultando api/${razaSeleccionada}`);
    fetch(`https://dog.ceo/api/breed/${razaSeleccionada}/images/random`)
      .then(response => response.json())
      //.then(data => console.log(data))
      .then(data => setImgRaza(data.message))
  }, [razaSeleccionada])

  function handleChange(event) {
    //console.log('Raza seleccionada: ', event.target.value)
    setRazaSeleccionada(event.target.value)
    //console.log(razaSeleccionada)
  }


  function handleClick() {
    setContador(contador + 1)
  }

  return (
    <>
      <div id="uno">
        <h1>{`Contador ${contador}`}</h1>
        <button id="boton" onClick={handleClick}>Click!</button>
      </div>

      <div id="dos">
        <h1>Hora actual CDMX:</h1>
        <h1>{hora}</h1>
      </div>

      <div id="tres">
        <select onChange={handleChange}>
          {razas.map(
            (raza, i) => <option value={raza} key={i}>{raza}</option>
          )}
        </select>

        {
          imgRaza !== null
            ? <img src={imgRaza} height={'300px'}/>
            : ''
        }

      </div>

    </>
  )
}

export default App
