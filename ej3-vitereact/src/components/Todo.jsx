import { Component } from 'react'
import PropTypes from 'prop-types'

import '../styles/Todo.css'

//const Todo = ()=>{
class Todo extends Component {

    state = {
        terminado: false
    }

    render() {
        return (
            <div className={`todo ${this.state.terminado ? 'todo-terminado' : ''} `}>

                <p className="todo-item">Tarea por hacer</p>
                <button
                    className="borrar"
                    onClick={() => this.setState({ terminado: true })}
                >
                    borrar
                </button>

            </div>
        )
    }
}

Todo.propTypes = {
    terminado: PropTypes.bool.isRequired
}

export default Todo
