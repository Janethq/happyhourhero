

function CocktailIngredientItem({ ingredient }) {
  console.log( ingredient );
  return <li key={ingredient}>{ingredient}</li>;
}

export default CocktailIngredientItem;
