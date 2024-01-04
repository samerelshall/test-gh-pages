import React from "react";
import { useEffect } from "react";
import SearchIcon from "./search.svg";
import RecipeCard from "./RecipeCard";

export default function FoodSearch({
  isLoading,
  setIsLoading,
  recipes,
  setRecipes,
  query,
  setQuery,
  searchRecipes,
}) {
  useEffect(() => {
    searchRecipes();
  }, []);
  return (
    <>
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchRecipes(query)}
        />
      </div>
      {recipes?.length > 0 ? (
        <div className="container">
          {recipes.map((item) => {
            return <RecipeCard key={item.idMeal} item={item} />;
          })}
        </div>
      ) : (
        <h1>Loading data</h1>
      )}
    </>
  );
}
