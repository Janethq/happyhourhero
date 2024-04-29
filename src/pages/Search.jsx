import { useState } from "react";
import Cocktail from "../components/Cocktail";
import ModalComponent from "../components/ModalComponent";

function Search() {
  // controls modal
  const [open, setOpen] = useState(false);
  //model opens here
  const handleOpen = () => setOpen(true);
  //take in user input
  const [ingredient, setIngredient] = useState("");
  //find the cocktails
  const [cocktails, setCocktails] = useState([]);

  const [modalData, setModalData] = useState({});
  const fetchData = async (e) => {
    e.preventDefault();
    console.log("fetchData");
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient}`
      );
      const data = await response.json();
      console.log(data.drinks);
      setCocktails(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={fetchData}>
          <label htmlFor="ingredient">
            Search drink:
            <input
              type="text"
              id="ingredient"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)} //take value from input box
            />
            <button type="submit">Search</button>
          </label>
        </form>
        <ul>
          {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink}>
              <Cocktail
                cocktail={cocktail}
                handleOpen={handleOpen}
                setModalData={setModalData}
              />
            </div>
          ))}
        </ul>
      </div>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        modalData={modalData}
        setModalData={setModalData}
      />
    </>
  );
}

export default Search;
