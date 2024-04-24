import { useEffect, useState } from "react";
// import { getRandomCocktail } from "../api/cocktailDB";

function Daily() {
  const [cocktail, setCocktail] = useState(null);

  const fetchData = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    const response = await fetch(url, { method: "GET" });
    const test = await response.json();
    console.log(test);
    setCocktail(test);
  };

  useEffect(() => {
    console.log(cocktail); // To check for cocktail on null and the cocktail object
    if (cocktail === null) {
      // only gets random cocktail if there isn't one already
      // getRandomCocktail()
      //   .then((data) => {
      //     setCocktail(data);
      //   });
      fetchData();
    }
  }, [cocktail]);

  //unordered ingredients list
  //key = strIngredient (unique key)&& value !== null => return value
  //else, dont return anything => null
  //access object: cocktail.drinks[0].strIngredient
  //use .map to generate an array of ingredients and put each of them in list format

  return (
    <>
      <div>
        {cocktail && (
          <div key={cocktail.drinks[0].idDrink}>
            <h2>Name: {cocktail.drinks[0].strDrink}</h2>
            <img src={cocktail.drinks[0].strDrinkThumb} />
            <ul className="ingredientList">
              {Object.keys(cocktail.drinks[0]).map((key) => {
                if (
                  key.startsWith("strIngredient") &&
                  cocktail.drinks[0][key]
                ) {
                  return <li key={key}>{cocktail.drinks[0][key]}</li>;
                }
                return null;
              })}
            </ul>
            <p>{cocktail.drinks[0].strInstructions}</p>
            <br />
            <button onClick={fetchData}>ANOTHER DRINK</button>
            <button>Favourite</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Daily;
