

function Cocktail({ cocktail }) {

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

  return (
    <div>
      <h2>Name: {cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} />
      <p>{cocktail.strInstructions}</p>
      <br />

      <button onClick={postAirtable}>Favourite</button>
    </div>
  );
}

export default Cocktail;
