import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

export default function DetailsPage({ recipes }) {
  const [ing, setIng] = useState([]);
  const strMeasure1 = "strMeasure1";
  const koko = () => {
    const lolo = [];
    if (recipes.length > 0) {
      for (let i = 1; i < 20; i++) {
        let fofo = "strIngredient" + i;
        let measure = "strMeasure" + i;
        let igogo = recipes[0][fofo];
        let mgogo = recipes[0][measure];
        let imgogo = i + "- " + mgogo + " of  " + igogo;
        console.log("gogo", imgogo);
        igogo && lolo.push(imgogo);
      }
      console.log("#########", `${lolo}`);
      setIng(lolo);
    }
  };
  useEffect(() => {
    koko();
    console.log(ing);
  }, []);

  return (
    <div>
      <h2>{recipes[0].strMeal} </h2>
      <div>
        <img
          src={
            recipes[0].strMealThumb !== "N/A"
              ? recipes[0].strMealThumb
              : "https://via.placeholder.com/400"
          }
          alt={recipes[0].strMeal}
        />
      </div>
      <h2>Instructions: {recipes[0].strInstructions} </h2>
      {ing.map((item, index) => (
        <h5 key={index}>{item}</h5>
      ))}

      <div>
        <ReactPlayer
          url={recipes[0].strYoutube}
          className="react-player"
          width="640px"
          height="360px"
          controls="true"
        />
      </div>
    </div>
  );
}
