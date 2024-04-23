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
  //WHAIIIIII
  return (
    <>
      <div>
      
        {cocktail && (
          <div key={cocktail.drinks[0].idDrink}>
            <h2>Name: {cocktail.drinks[0].strDrink}</h2>
            <img src={cocktail.drinks[0].strDrinkThumb} />
            <button onClick={fetchData}>ANOTHER DRINK</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Daily;
