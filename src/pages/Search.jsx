import { useState, useEffect } from "react";
import Cocktail from "./Cocktail";

function Search() {
  //take in user input
  const [ingredient, setIngredient] = useState("");
  //find the cocktails
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient}`
      );
      const data = await response.json();
      setCocktails(data.drinks);
    };
    
    //if theres an ingredient, fetch data from api
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
            onChange={(e) => setIngredient(e.target.value)} //take value from input box
          />
        </label>
      </form>
      <ul>
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </ul>
    </div>
  );
}

export default Search;
