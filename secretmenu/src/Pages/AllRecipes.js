import './AllRecipes.css';
import React, { useState } from 'react';
import NavBar from '../Components/NavBar.js'
import matcha from '../Assets/matchasquare.jpg'
import vic from '../Assets/VICsquare.webp'
import Matcha from './Matcha';
import VIC from './VIC.js';
import {Link} from "react-router-dom";

function AllRecipes(){
    return(
        <div className="AllRecipes">
            <NavBar />
            <div className="titleText">All Recipes</div>
            <div className="All">
            <Link to="/specialmatcha" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={matcha} className="RecipeBox"></img>
                <div className="RecipeText">Matcha Latte</div>
            </Link>
            <Link to="/vietnameseicedcoffee" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={vic} className="RecipeBox"></img>
                <div className="RecipeText">Vietnamese Iced Coffee</div>
            </Link>
            </div>
          
        </div>
    );
}

export default AllRecipes;