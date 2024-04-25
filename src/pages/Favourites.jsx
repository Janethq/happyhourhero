import { useState, useEffect } from "react";

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

  return (
    //retrieve the data here
    <>
      <div>
        {favouritesList.map((item) => (
          <div key={item.id}>
            <h2>{item.fields.name}</h2>
            <img src={item.fields.cocktailImg}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default Favourites;
