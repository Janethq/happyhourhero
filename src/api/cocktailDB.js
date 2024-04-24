// CRUD routes
// POST - create data
// GET - read data
// PUT - update data
// DELETE - delete data

export async function getRandomCocktail() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  const response = await fetch(url, { method: "GET" });
  const cocktailResponse = await response.json();
  return cocktailResponse.drinks[0];
}

