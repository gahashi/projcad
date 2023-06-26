import { Link } from "react-router-dom";
import "../App.css";
import MyImage from "./logo.png";
import MyImage2  from "./user.png" 
import MyImage3 from "./users-alt.png"
import MyImage4 from "./edit.png"


const Navbar = () => {
  return (
    <div className="navbar1">
      <nav>
        <div>
          <img className="imgg" src={MyImage}></img>
        </div>
        <div>
          <Link className="lbar" to="/">
            cadastro           <img className="imgg2" src={MyImage2}></img>
          </Link>
        </div>
        <div>
          <Link className="lbar" to="/Contact">
            Funcionarios   <img className="imgg2" src={MyImage3}></img>
          </Link>
        </div>
        <div>
          <Link className="lbar" to="/Pagaments">
            Pagamentos   <img className="imgg2" src={MyImage4}></img>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
