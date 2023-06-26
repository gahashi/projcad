import { Link } from "react-router-dom";

function Pagaments (){
    return(
        <div>
            <h1>lista de Funcionarios</h1>
            {}
            <p>
                <Link to="/Contact/1">Funcionario1</Link>
                <Link to="/Contact/2">Funcionario2</Link>
                <Link to="/Contact/3">Funcionario3</Link>
            </p>
        </div>

    )

}

export default Pagaments;