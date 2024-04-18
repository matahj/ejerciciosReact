import PropTypes from 'prop-types'

import Todo from './Todo.jsx'

import '../styles/Todolist.css'


const Todolist = ({ tareas, toggleFn, deleteFn }) => {

    return (
        <div id="listaTareas">
            <h1>Lista de tareas</h1>
            {
                tareas.map((elem, index) =>
                    <Todo
                        key={index}
                        terminado={elem.terminado}
                        titulo={elem.titulo}
                        deleteFn={(e) => deleteFn(e,index)}//Es , no .
                        toggleFn={(e) => toggleFn(e,index)}//Es , no .
                    />
                )
            }

            {/* 
            <Todo />
            <Todo /> 
            */}

        </div>
    )
}

Todolist.propTypes = {
    tareas: PropTypes.array,
    toggleFn: PropTypes.func,
    deleteFn: PropTypes.func
}

export default Todolist;