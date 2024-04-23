import { useEffect, useState } from "react";
import { getRandomCocktail } from "../api/cocktailDB";


// const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// const response = await fetch(url, { method: "GET" });
// const test = await response.json();
// console.log(test);

function Daily() {
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    console.log(cocktail) // To check for cocktail on null and the cocktail object
    if (cocktail === null) { // only gets random cocktail if there isn't one already
      getRandomCocktail()
        .then((data) => {
          setCocktail(data);
        });
    }
  }, [cocktail])
  return (
    <div>Daily</div>
  )
}

export default Daily