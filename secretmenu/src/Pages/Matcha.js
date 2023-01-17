import './Matcha.css';
import React from 'react';
import NavBar from '../Components/NavBar.js'
import RecipeLayout from '../Components/RecipeLayout';
import matchaheader from '../Assets/matcha1.png'

function Matcha({db}) {

    return (
      <div className="SpecMatcha">
        <NavBar />
        <div className="header">
        </div>
        <RecipeLayout db={db} recipeName="MatchaLatte"/>
      </div>
    );
  }
  
  export default Matcha;