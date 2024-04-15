import Checkmark from './Checkmark'

import { Component } from 'react'
import PropTypes from 'prop-types'

import '../styles/Todo.css'

//const Todo = ()=>{
class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            terminado: props.terminado
        }
    }

    // state = {
    //     terminado: false
    // }

    elementoTodo = () => {

        return (
            <>
                {this.state.terminado ? <Checkmark /> : ''}
                <p className="todo-item">Tarea por hacer</p>
                <button
                    className="borrar"
                    onClick={() => this.setState({ terminado: true })}
                >
                    borrar
                </button>
            </>
        )
    }

    render() {
        return (
            <div className={`todo ${this.state.terminado ? 'todo-terminado' : ''} `}>

            {this.elementoTodo()}

            </div>
        )
    }
}

Todo.propTypes = {
    terminado: PropTypes.bool.isRequired
}

export default Todo
