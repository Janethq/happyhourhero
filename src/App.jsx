async function logRandomCocktail() {
  const response = await fetch(
    "www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const movies = await response.json();
  console.log(movies);
}

function App() {

  logRandomCocktail()
  return (
    <>
      <h1>Happy Hour Hero</h1>
    </>
  );
}

export default App;
