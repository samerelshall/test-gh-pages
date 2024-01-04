import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import DetailsPage from "./DetailsPage";

export default function RecipeDetails() {
  const param = useParams();
  const Api_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (title) => {
    setIsLoading(true);
    const url = Api_url + param.idMeal;
    const respose = await fetch(url);
    const data = await respose.json();
    setRecipes(data.meals);
    console.log(data.meals);
    setIsLoading(false);
  };
  useEffect(() => {
    searchRecipes();
  }, []);

  return (
    <>
      <h1>Food Details Page</h1>
      <h2>{param.idMeal}</h2>
      {recipes.length > 0 ? (
        <DetailsPage recipes={recipes} />
      ) : (
        <h2>Loading</h2>
      )}

      <Link to="/">Home</Link>
    </>
  );
}
