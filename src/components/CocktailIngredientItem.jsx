

function CocktailIngredientItem({ ingredient ,measurement}) {
  console.log( ingredient );
  return <li key={ingredient}>{measurement}{ingredient}</li>;
}

export default CocktailIngredientItem;
