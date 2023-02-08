import React, { useNavigate } from "react-router-dom";

import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  console.log(recipe.image_url);

  const handleClick = () => {
    navigate(`/recipes/${recipe.recipe_id}`);
  };
  return (
    <div className="main-recipe-containter">
      <div className="recipe-container">
        <img
          className="recipe-img"
          src={recipe.image_url}
          alt="Image of recipe"
        />

        <div className="recipe-content">
          <h3 className="recipe-name">{recipe.recipe_name}</h3>
          <button onClick={handleClick}>See More</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
