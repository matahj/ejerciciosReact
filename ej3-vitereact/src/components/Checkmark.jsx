import PropTyps from 'prop-types'

import '../styles/Checkmark.css'
import checkmark from '../assets/check-img.svg'

const Checkmark = ({ terminado }) => {
    return (
        <div>
            
            {
                terminado
                    ? <img className="check-img" src={checkmark} alt="check-img" />
                    : <div style={{ height: '40px', width: '40px' }}></div>
            }

        </div>
    )
}

Checkmark.propTypes = {
    terminado: PropTyps.bool.isRequired
}

export default Checkmark
