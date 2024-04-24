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
       console.log(airtableResponse);
     };

//fetch the data with useEffect by calling fetchAirtable function 
     useEffect(() => {
       fetchAirtable();
     }, []);

  return (
    <div>Favourites</div>
  )
}

export default Favourites
