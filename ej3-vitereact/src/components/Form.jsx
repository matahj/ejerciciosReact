import { useState } from 'react'

import PropTypes from 'prop-types'

import '../styles/Form.css'

const Form = ({ addTaskFn }) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addTaskFn(value)
        setValue('')
    }

    return (
        <form
            className="form-agregar"

            onSubmit={handleSubmit}
        >
            <input
                className="input-agregar"
                type="text"
                placeholder="Tarea nueva"

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