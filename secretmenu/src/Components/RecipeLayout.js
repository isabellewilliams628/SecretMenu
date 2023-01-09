import './RecipeLayout.css';
import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { getStorage, ref } from "firebase/storage";


function RecipeLayout({db, recipeName}) {
    const [data, setData] = useState(null);
    const [pumps, setPumps] = useState("tall");
    const [buttonSelect, setButtonSelect] = useState(0);

    const storage = getStorage();
    const storageRef = ref(storage);

    async function getData() {
        const docRef = doc(db, "Recipe", recipeName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        setData(docSnap.data());
        } else {
        console.log("No such document!");
        }
    }

    useEffect(() => {
        getData();
      }, []);

    console.log(data)


    return (
        
      <div className="RecipeLayout">
            <div className="topHalf">
                
            </div>
            <div className="bottomHalf">
                <div className="left">
                    <div className="recipeName">{data?.RecipeName}</div>
                    <div className="description">{data?.Description}</div>
                </div>
                <div className="recipeBox">
                    <div className="TopCard">
                        <div className="Title">What To Order :</div>
                        <div className="sizeButton" onClick={() => setPumps("tall")}>
                            <a>Tall</a>
                        </div>
                        <div className="sizeButton" onClick={() => setPumps("grande")}>
                            <a>Grande</a>
                        </div>
                        <div className="sizeButton" onClick={() => setPumps("venti")}>
                            <a>Venti</a>
                        </div>
                    </div>
                    <div className="recipeList">
                        <a>- {data?.Ingredients.IngOne}</a>
                        <a>- {data?.Ingredients.IngTwo}</a> 
                        <a>- {data?.Ingredients.IngThree}</a>
                        <a>- {pumps === "grande" ? <a> 3 </a> : pumps === "venti" ? <a>4</a> : <a> 2 </a> } {data?.Ingredients.IngFour}</a>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  
  export default RecipeLayout;