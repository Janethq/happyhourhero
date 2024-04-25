import CocktailIngredientItem from "./CocktailIngredientItem";

function IngredientsList({ cocktail }) {
  return (
    <ul className="ingredientList">
      {Object.keys(cocktail).map((key) => {
        if (key.startsWith("strIngredient") && cocktail[key]) {
          // console.log(cocktail[key]);
          console.log("string");
          return (
            <CocktailIngredientItem key={key} ingredient={cocktail[key]} />
          );
        }
        return null;
      })}
    </ul>
  );
}

export default IngredientsList;
