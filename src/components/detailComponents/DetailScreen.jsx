import React, { useCallback, useEffect, useState } from "react";
import salmon from "../../assets/salmon.jpg";
import { useParams } from "react-router-dom";
import "./DetailScreen.css";
import axios from "axios";
import RecipeCard from "../RecipeCard";

const DetailScreen = () => {
  const [singleRecipe, setSingleRecipe] = useState([]);
  const { id } = useParams();

  const getRecipe = useCallback(async () => {
    await axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        console.log(res.data);
        setSingleRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getRecipe();
  }, []);
  const { prep_time, cook_time, serves, instructions } = singleRecipe;
  const ingredients = singleRecipe.ingredients;

  return (
    <div>
      <div
        className="detail-container"
        style={{
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${singleRecipe.image_url})`,
          backgroundSize: "cover",
          height: "300px",
        }}
      >
        <div>
          <h1>{singleRecipe.recipe_name}</h1>
        </div>
      </div>
      <div className="detail-container2">
        <div className="recipe">
          <div>
            <h4>Recipe</h4>
            <p>Prep Time:{prep_time}</p>
            <p>Cook Time: {cook_time}</p>
            <p>Serves: {serves}</p>
            <br />
            <ul>
              Ingredients
              {ingredients &&
                ingredients.map((item) => {
                  return <li>{item.ingredient}</li>;
                })}
            </ul>
          </div>
          <div></div>
        </div>
        <div className="instructions">
          <h4>Instructions</h4>
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
