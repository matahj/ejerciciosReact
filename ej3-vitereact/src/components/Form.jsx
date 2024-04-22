import { useState } from 'react'

import PropTypes from 'prop-types'

import '../styles/Form.css'

const Form = ({ addTaskFn }) => {

    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <form
            onSubmit={() => { }}
            className="form-agregar"
        >
            <input
                className="input-agregar"
                type="text"
                placeholder="tarea nueva"
                
                value={value}
                onChange={handleChange}
            />
            <button>agregar</button>
        </form>
    )
}

Form.propTypes = {
    addTaskFn: PropTypes.func.isRequired
}

export default Form