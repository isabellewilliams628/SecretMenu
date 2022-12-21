import './Matcha.css';
import React from 'react';
import NavBar from '../Components/NavBar.js'
import RecipeLayout from '../Components/RecipeLayout';


function Matcha() {
    return (
      <div className="SpecMatcha">
        <NavBar />
        <RecipeLayout />
      </div>
    );
  }
  
  export default Matcha;