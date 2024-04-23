function Cocktail({ cocktail }) {
  return (
    <div>
      <h2>Name: {cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} />
      <p>{cocktail.strInstructions}</p>
      <br />
      <button>Favourite</button>
    </div>
  );
}

export default Cocktail;
