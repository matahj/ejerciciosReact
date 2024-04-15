import Header from './Header'
import Todolist from './Todolist'

import '../styles/App.css'

const App = () => {

  return (
    <div className="wrapper">
      <div className="card-frame">

        {/* <h1>Hola React</h1>
        <h1>Hola React</h1> */}

        <Header
          pendientes={'2'}
        />
        <Todolist />

      </div>
    </div>

  )
}

export default App
