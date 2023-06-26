import { Link } from "react-router-dom";

function Contact(){
    return(
        <div>
            <h1>Contatos</h1>
                {}
            <p>
                <Link to="/Contact/1">contato1</Link>
                <Link to="/Contact/2">contato2</Link>
                <Link to="/Contact/3">contato3</Link>
            </p>
        </div>

    )

}

export default Contact;