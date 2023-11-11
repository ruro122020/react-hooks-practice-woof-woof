import React, { useEffect, useState } from "react";
import PuppyListName from "./PuppyListName";

function App() {
  const [puppies, setPuppies] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
      .then(res => res.json())
      .then(puppies => setPuppies(puppies))
  }, [])

  const displayDogNames = puppies.map(puppy => <PuppyListName key={puppy.id} puppy={puppy} />)
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">{displayDogNames}</div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;
