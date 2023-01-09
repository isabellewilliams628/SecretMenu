import './Matcha.css';
import React from 'react';
import NavBar from '../Components/NavBar.js'
import RecipeLayout from '../Components/RecipeLayout';


function Matcha({db}) {

    return (
      <div className="SpecMatcha">
        <NavBar />
        <RecipeLayout db={db} recipeName="MatchaLatte"/>
      </div>
    );
  }
  
  export default Matcha;