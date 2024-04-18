import PropTypes from 'prop-types'

import Todo from './Todo.jsx'

import '../styles/Todolist.css'


const Todolist = ({tareas})=>{

    return(
        <div id="listaTareas">
            <h1>Lista de tareas</h1>

            {/* 
            <Todo />
            <Todo /> 
            */}

            {
                tareas.map( (elem, index)=>
                    <Todo
                    key={index} 
                    terminado={elem.terminado}
                    titulo = {elem.titulo}
                    />
                )
            }

        </div>
    )
}

Todolist.propTypes = {
    tareas: PropTypes.array
}

export default Todolist;