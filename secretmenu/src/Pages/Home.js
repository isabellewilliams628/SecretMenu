import './Home.css';
import React from 'react';
import NavBar from '../Components/NavBar.js'
import logo from '../Assets/starb.png'

function Home() {
  return (
    <div className="Home">
        <NavBar/>
        <div className="MiddleCard">
            <div className="MiddleCardText">Secret Menu</div>
            <img src={logo} className="Logo"></img>
        </div>
    </div>
  );
}

export default Home;