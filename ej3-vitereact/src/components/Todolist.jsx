import Todo from './Todo.jsx'

import '../styles/Todolist.css'


const Todolist = ()=>{

    return(
        <div id="listaTareas">
            <h1>Lista de tareas</h1>

            <Todo />
            <Todo />
            <Todo />
            <Todo />


        </div>
    )
}

export default Todolist;