


const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const response = await fetch(url, { method: "GET" });
const test = await response.json();
console.log(test);
function Daily() {
  return (
    <div>Daily</div>
  )
}

export default Daily