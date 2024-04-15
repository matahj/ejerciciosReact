import '../styles/Header.css';

const Header = ({pendientes, terminadas})=>{

    return(
        <div>
            <h1 className="header card-header-title">
                {`Tareas pendientes ${pendientes}`}
            </h1>
        </div>
    )

}

export default Header;