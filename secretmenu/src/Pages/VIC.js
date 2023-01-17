import './VIC.css';
import React from 'react';
import NavBar from '../Components/NavBar.js'
import RecipeLayout from '../Components/RecipeLayout';

function VIC({db}) {
    return (
      <div className="VIC">
        <NavBar />
        <div className="VICheader">
        </div>
        <RecipeLayout db={db} recipeName="VietnameseIcedCoffee"/>
      </div>
    );
  }
  
  export default VIC;