import './Home.css';
import React from 'react';
import NavBar from '../Components/NavBar.js'
import logo from '../Assets/starb.png'
import {Link} from "react-router-dom";
import matcha from '../Assets/matchasquare.jpg'
import vic from '../Assets/VICsquare.webp'

function Home() {
  return (
    <div className="Home">
        <NavBar/>
        <div className="MiddleCard">
            <div className="MiddleCardText">Secret Menu</div>
            <img src={logo} className="Logo"></img>
        </div>
        <div className="featured">
          <div className="text">Featured Recipes</div>
          <div className="featrec">
          <Link to="/specialmatcha" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={matcha} className="FRecipeBox"></img>
                <div className="FRecipeText">Matcha Latte</div>
          </Link>
          <Link to="/vietnameseicedcoffee" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={vic} className="FRecipeBox"></img>
                <div className="FRecipeText">Vietnamese Iced Coffee</div>
          </Link>
          </div>
        </div>
    </div>
  );
}

export default Home;