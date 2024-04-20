import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Daily from "./pages/Daily";
import History from "./pages/History";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import { getRandomCocktail } from "./api/cocktailDB";


const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const response = await fetch(url, { method: "GET" });
const test = await response.json();
console.log(test);

function App() {
  const [cocktailData, setCocktailData] = useState(null);

  useEffect(() => {
    const fetchRandomCocktail = async () => {
      const cocktail = await getRandomCocktail();
      console.log(cocktail);
      setCocktailData(cocktail);
    };
    if (cocktailData === null) {
      fetchRandomCocktail();
    }
  }, []); //empty []= on load

  return (
    <main>
      <Navbar />
      <div id="display-container">
        <div id="nav-block" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/history" element={<History />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
