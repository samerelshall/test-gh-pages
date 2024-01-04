import { Link } from "react-router-dom";

export default function RecipeCard({ item }) {
  const { idMeal, strMeal, strMealThumb } = item;
  // const params = useParams();
  return (
    <div className="movie" key={idMeal}>
      <Link to={`/Recipe/${idMeal}`}>
        <div>
          <p>{idMeal}</p>
        </div>

        <div>
          <img
            src={
              strMealThumb !== "N/A"
                ? strMealThumb
                : "https://via.placeholder.com/400"
            }
            alt={item.strCategory}
          />
        </div>

        <div>
          <span>{strMeal}</span>
          <h3>{strMeal}</h3>
        </div>
      </Link>
    </div>
  );
}
