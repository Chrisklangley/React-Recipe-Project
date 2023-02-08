import React from "react";
import AdBanner from "./AdBanner";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import RecipeContext from "../RecipeContext";

const HomeScreen = () => {
  const [recipeData, setRecipeData] = useState([]);

  const getRecipes = useCallback(async () => {
    await axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipeData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <div>
      <AdBanner />
      <RecipeContext recipes={recipeData} />
    </div>
  );
};

export default HomeScreen;
