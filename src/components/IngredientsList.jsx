import CocktailIngredientItem from "./CocktailIngredientItem";

function IngredientsList({ cocktail }) {
  const ingredients = Object.keys(cocktail)
    .filter((key) => key.startsWith("strIngredient"))
    .filter((key) => cocktail[key])//rmv null ingredients
    .map((key, idx) => {
      // keys of the cocktail object for the measurements are named with a numeric suffix starting from 1 (strMeasure1), not 0
      const measurement = cocktail[`strMeasure${idx + 1}`];
      return (
        <CocktailIngredientItem
          key={key}
          ingredient={cocktail[key]}
          // add in measurement
          measurement={measurement}
        />
      );
    });

  return <ul className="ingredientList">{ingredients}</ul>;
}

export default IngredientsList;
