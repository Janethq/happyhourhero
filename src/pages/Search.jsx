import { useState, useEffect } from "react";
import Cocktail from "./Cocktail";

function Search() {
  const [ingredient, setIngredient] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient}`
      );
      const data = await response.json();
      setCocktails(data.drinks);
    };

    if (ingredient) {
      fetchData();
    }
  }, [ingredient]);

  return (
    <div>
      <form>
        <label htmlFor="ingredient">
          Search drink:
          <input
            type="text"
            id="ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {cocktails &&
          cocktails.map((cocktail) => (
            <Cocktail key={cocktail.idDrink} cocktail={cocktail} />
          ))}
      </ul>
    </div>
  );
}

export default Search;
