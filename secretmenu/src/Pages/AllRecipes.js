import './AllRecipes.css';
import React, { useState } from 'react';
import NavBar from '../Components/NavBar.js'
import matcha from '../Assets/matchasquare.jpg'
import vic from '../Assets/VICsquare.webp'


function AllRecipes(){
    return(
        <div className="AllRecipes">
            <NavBar />
            <div className="titleText">All Recipes</div>
            <div className="All">
            <div className="Matcha">
                <img src={matcha} className="RecipeBox"></img>
                <div className="RecipeText">Matcha Latte</div>
            </div>
            <div className="VietnameseCoffee">
                <img src={vic} className="RecipeBox"></img>
                <div className="RecipeText">Vietnamese Iced Coffee</div>
            </div>
            </div>
          
        </div>
    );
}

export default AllRecipes;