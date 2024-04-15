
import '../styles/Checkmark.css'
import checkmark from '../assets/check-img.svg'

const Checkmark = ()=>{
    return(
        <div>
            <img className="check-img" src={checkmark} alt="check-img" />
        </div>
    )
}

export default Checkmark
