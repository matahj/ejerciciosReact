import Todo from './Todo.jsx'

import '../styles/Todolist.css'


const Todolist = ()=>{

    return(
        <div id="listaTareas">
            <h1>Lista de tareas</h1>

            <Todo terminado = {true}/>
            <Todo terminado = {false}/>
            <Todo terminado = {true}/>
            <Todo terminado = {true}/>
            <Todo terminado = {true}/>
            <Todo terminado = {false}/>


        </div>
    )
}

export default Todolist;