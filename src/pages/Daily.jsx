import { useEffect, useState } from "react";
import { getRandomCocktail } from "../api/cocktailDB";
import IngredientsList from "../components/IngredientsList";
function Daily() {
  const [cocktail, setCocktail] = useState(null);
  const fetchAndSetCocktail = async () => {
    const cocktailData = await getRandomCocktail();
    console.log(cocktailData);
    setCocktail(cocktailData);
  };
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  //under using fetchAPI-> Supplying request options
  const postAirtable = async () => {
    const url = `https://api.airtable.com/v0/appmAwZOPe64Evw3t/Table%201`;
    const dataObj = {
      fields: {
        name: cocktail.strDrink,
        cocktailId: cocktail.idDrink,
      },
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify(dataObj),
    };
    const response = await fetch(url, options);
    const postResponse = await response.json();
    console.log(postResponse);
  };

  useEffect(() => {
    fetchAndSetCocktail();
  }, []);

  return (
    <>
      <div>
        {cocktail && (
          <div key={cocktail.idDrink}>
            <h2>Name: {cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} />
            <IngredientsList cocktail={cocktail} />
            <p>{cocktail.strInstructions}</p>
            <br />
            <button onClick={fetchAndSetCocktail}>ANOTHER DRINK</button>
            <button onClick={postAirtable}>Favourite</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Daily;
