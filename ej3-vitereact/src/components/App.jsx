import { Component } from 'react'

import Header from './Header'
import Todolist from './Todolist'
import Form from './Form'

import '../styles/App.css'

//const App = () => {
class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    this.setState(
      {
        todos: [
          { terminado: false, titulo: 'tarea x' },
          { terminado: false, titulo: 'tarea y' },
          { terminado: true, titulo: 'tarea z' }
        ]
      }
    )
  }


  handleClickDelete = (event, index) => {
    const todos = [...this.state.todos]
    todos.splice(index, 1)
    this.setState({ todos })
  }

  handleClickToggleDone = (event, index) => {
    const todos = [...this.state.todos]
    todos[index].terminado = !todos[index].terminado
    console.log(todos)
    this.setState({ todos })
  }

  handleAddTask = (texto) => {
    const yaExiste = this.state.todos.find(
      elem => elem.titulo === texto
    )

    if (yaExiste) {
      alert('La tarea ya existe')
      return
    }

    const listaTareas = [...this.state.todos]
    listaTareas.concat([
      { terminado: false, titulo: texto }
    ])

    this.setState({
      todos: listaTareas
    })

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
          <Todolist
            tareas={this.state.todos}
            toggleFn={this.handleClickToggleDone}
            deleteFn={this.handleClickDelete}
          />

          <Form addTaskFn={this.handleAddTask}/>

        </div>
      </div>

    )
  }

}

export default App
