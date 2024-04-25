import React from 'react'

function FavouriteItem({ item, setFavouritesList }) {
  const removeItemAirtable = async () => {};

  return (
    <div key={item.id}>
      <h2>{item.fields.name}</h2>
      <img src={item.fields.cocktailImg} />
      <br />
      <button onClick={removeItemAirtable}>Remove</button>
    </div>
  );
}

export default FavouriteItem