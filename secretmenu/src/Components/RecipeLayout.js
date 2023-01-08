import './RecipeLayout.css';

function RecipeLayout() {
    return (
      <div className="RecipeLayout">
            <div className="topHalf">
            </div>
            <div className="bottomHalf">
                <div className="recipeName"></div>
                <div className="description"></div>
                <div className="recipeBox">
                    <div className="TopCard">
                        <div className="Title">What To Order</div>
                        <div className="sizeButton">Tall</div>
                        <div className="sizeButton">Grande</div>
                        <div className="sizeButton">Venti</div>
                        <div className="recipeList">
                            
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  
  export default RecipeLayout;