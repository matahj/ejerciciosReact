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
                {/* {
                    this.state.terminado
                        ? <Checkmark />
                        : <div style={{ height: '40px', width: '40px' }}></div>
                } */}

                <Checkmark terminado={this.props.terminado} />

                <p
                    className="todo-item"
                    onClick={e => this.props.toggleFn(e)}
                >
                    {this.props.titulo}
                </p>

                <button
                    className="borrar"
                    //onClick={() => this.setState({ terminado: true })}
                    onClick={e => this.props.deleteFn(e)}
                >
                    borrar
                </button>
            </>
        )
    }

    render() {
        return (
            <div className={`todo ${this.props.terminado ? 'todo-terminado' : ''} `}>

                {this.elementoTodo()}

            </div>
        )
    }
}

Todo.propTypes = {
    terminado: PropTypes.bool.isRequired,
    titulo: PropTypes.string.isRequired,
    deleteFn: PropTypes.func.isRequired,
    toggleFn: PropTypes.func.isRequired
}

export default Todo
