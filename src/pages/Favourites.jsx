import { useState, useEffect } from "react";
import.meta.env.VITE_AIRTABLE_API_KEY;

function Favourites() {
  const [favouritesList, setFavouritesList] = useState([]);

  const fetchAirtable = async () => {
    const url = `https://api.airtable.com/v0/appmAwZOPe64Evw3t/Table%201`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
      },
    };
    const response = await fetch(url, options);
    const airtableResponse = await response.json();
    console.log(airtableResponse.records);
    setFavouritesList(airtableResponse.records);
  };

  //fetch the data with useEffect by calling fetchAirtable function
  useEffect(() => {
    fetchAirtable();
  }, []);

  const rmvFav = async (recordID) => {
    const url = `https://api.airtable.com/v0/appmAwZOPe64Evw3t/Table%201/${recordID}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
      },
    };
    const response = await fetch(url, options);
    const airtableResponse = response.json();
    console.log(airtableResponse);
    setFavouritesList(
      favouritesList.filter((item) => item.fields.recordID !== recordID)
    );
  };

  return (
    <>
      <div>
        {favouritesList.map((item) => (
          <div key={item.id}>
            <h2>{item.fields.name}</h2>
            <img src={item.fields.cocktailImg} />
            <br />
            <button onClick={() => rmvFav(item.fields.recordID)}>
              Remove from Favourite
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Favourites;
