import { Component } from 'react'

import Header from './Header'
import Todolist from './Todolist'

import '../styles/App.css'

//const App = () => {
class App extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    this.setState(
      {
        todos: [
          {terminado: false, titulo: 'tarea x'},
          {terminado: false, titulo: 'tarea y'},
          {terminado: true, titulo: 'tarea z'}
        ]
      }
    )
  }

  render() {

    return (
      <div className="wrapper">
        <div className="card-frame">

          {/* <h1>Hola React</h1>
          <h1>Hola React</h1> */}

          <Header
            pendientes={this.state.todos.length}
          />
          <Todolist tareas = {this.state.todos}/>

        </div>
      </div>

    )
  }

}

export default App
