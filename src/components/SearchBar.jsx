import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import RecipeCard from "./RecipeCard";

function SearchBar({ recipes }) {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(recipes);
  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })

    .map((recipe, index) => {
      return <RecipeCard recipes={recipe} />;
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
          ></input>
        </span>
        <button>
          <IoSearch size="2em" color="#DA7635" />
        </button>
      </form>

      {recipeDisplay}
    </div>
  );
}

export default SearchBar;
