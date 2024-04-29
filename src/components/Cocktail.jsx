import.meta.env.VITE_AIRTABLE_API_KEY;
import { useState, useEffect } from "react";

function Cocktail({ cocktail, handleOpen, setModalData}) {
  //state for whether a drink is favourited
  const [isFavourited, setIsFavourited] = useState({});
  const postAirtable = async () => {
    const url = `https://api.airtable.com/v0/appmAwZOPe64Evw3t/Table%201`;
    const dataObj = {
      fields: {
        name: cocktail.strDrink,
        cocktailId: cocktail.idDrink,
        cocktailImg: cocktail.strDrinkThumb,
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
    setIsFavourited((prev) => ({ ...prev, [cocktail.idDrink]: true })); // update favourited status
  };

  useEffect(() => {
    // fetch the favourited status of the current cocktail from Airtable
    const fetchFav = async () => {
      const url = `https://api.airtable.com/v0/appmAwZOPe64Evw3t/Table%201`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
        },
      };
      const response = await fetch(url, options);
      const airtableResponse = await response.json();
      //look for cocktails with the matching id of 'cocktail' prop
      const record = airtableResponse.records.filter(
        //returns new array of matching records
        (record) => record.fields.cocktailId === cocktail.idDrink
      );
      // if more than 1 drink
      if (record.length > 0) {
        // add on another fav drink to current fav list and set its fav status to true
        setIsFavourited((prev) => ({ ...prev, [cocktail.idDrink]: true }));
      }
    };
    fetchFav();
  }, [cocktail.idDrink]);

  const handleClick = ()=>{
    handleOpen()
    //pass in cocktail for specific cocktail data
    setModalData(cocktail)
  }

  return (
    <div>
      <h2>Name: {cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} width="300" onClick={handleClick} />
      <p>{cocktail.strInstructions}</p>
      <br />
      {/* ternary operator: is it fav-ed? if true, return star. else(:), return Fav button */}
      {isFavourited[cocktail.idDrink] ? (
        <span>⭐️</span>
      ) : (
        <button onClick={postAirtable}>Favourite</button>
      )}
    </div>
  );
}

export default Cocktail;
