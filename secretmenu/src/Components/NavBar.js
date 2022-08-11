import './NavBar.css';
import heart from '../Assets/heart.png'

function NavBar() {
  return (
    <div className="NavBar">
      <div className="LeftSide">
          <div className="AllRecipes" >All Recipes</div>
          <div className ="Login">Register/Sign In</div>
        </div>
      <div className="RightSide">
          <img src={heart} className="Favorites"></img>
      </div>
    </div>
  );
}

export default NavBar;
