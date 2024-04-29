import { useEffect, useState } from "react";
import { getRandomCocktail } from "../api/cocktailDB";
import IngredientsList from "../components/IngredientsList";
import.meta.env.VITE_AIRTABLE_API_KEY;

function Daily() {
  const [cocktail, setCocktail] = useState({});
   const [isFavourited, setIsFavourited] = useState(false);
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
        cocktailImg: cocktail.strDrinkThumb,
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

  useEffect(() => {
    // fetch the favourited status of the current cocktail from Airtable
    const fetchFav = async () => {
      const url = `https://api.airtable.com/v0/appmAwZOPe64Evw3t/Table%201`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
        },
      };
      const response = await fetch(url, options);
      const airtableResponse = await response.json();
      //look for cocktails with the matching id of 'cocktail' prop
      const record = airtableResponse.records.filter(
        //returns new array of matching records
        (record) => record.fields.cocktailId === cocktail.idDrink
      );
      // if more than 1 drink
      if (record.length > 0) {
        // add on another fav drink to current fav list and set its fav status to true
        setIsFavourited(true);
      }
    };
    fetchFav();
  }, [cocktail.idDrink]);

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
            {/* ternary operator: is it fav-ed? if true, return star. else(:), return Fav button */}
            {isFavourited ? (
              <span>⭐️</span>
            ) : (
              <button onClick={postAirtable}>Favourite</button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Daily;
