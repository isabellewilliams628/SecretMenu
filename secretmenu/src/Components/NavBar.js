import './NavBar.css';
import heart from '../Assets/heart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";



function NavBar() {
  return (
    <div className="NavBar">
      
      <div className="LeftSide">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="Hom" >Home</div>
          </Link>
          <Link to="/allrecipes" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="Recipes" >All Recipes</div>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className ="Login">Register/Sign In</div>
          </Link>
        </div>
    </div>
  );
}

export default NavBar;
