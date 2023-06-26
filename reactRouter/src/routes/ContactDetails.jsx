import { useParams, useNavigate } from "react-router-dom";
const ContactDetails = () =>{
    const {id} = useParams();
    const navigate= useNavigate ()
    const handlecontact = ()=>{
            console.log("clicado");
            return navigate("/Contact");
    }

    return(
        <div>
             <h1>ContactDetails {id}</h1>
             <button onClick={handlecontact}>voltarS</button>
        </div>
    )
}

export default ContactDetails