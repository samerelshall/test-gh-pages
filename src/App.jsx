import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchIcon from "./search.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import Test from "./Test";
import RecipeDetails from "./RecipeDetails";
import FoodSearch from "./FoodSearch";

function App() {
  const Api_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  // const api2 = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (title) => {
    setIsLoading(true);
    const url = Api_url + query;
    const respose = await fetch(url);
    const data = await respose.json();
    setRecipes(data.meals);
    console.log(data.meals);
    setIsLoading(false);
  };

  // const searchMovies = async (query) => {
  //   setIsLoading(true);
  //   const url = Api_url + query;
  //   const respose = await fetch(url);
  //   const data = await respose.json();
  //   setRecipes(data.meals);
  //   console.log(data.meals);
  //   setIsLoading(false);
  // };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/test-gh-pages"
          element={
            <>
              <FoodSearch
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                recipes={recipes}
                setRecipes={setRecipes}
                query={query}
                setQuery={setQuery}
                searchRecipes={searchRecipes}
              />
            </>
          }
        />
        {/* <Route path="/" element={<Test />} /> */}
        <Route path="Recipe/:idMeal" element={<RecipeDetails />} />
      </Routes>
    </div>
  );

  //
}

export default App;
