import React, { useEffect, useState } from "react";
import PuppyListName from "./PuppyListName";
import PuppyInfoCard from "./PuppyInfoCard";

function App() {
  const [puppies, setPuppies] = useState([])
  const [isPuppyInfo, setIsPuppyInfo] = useState(false)
  const [puppyInfo, setPuppyInfo] = useState({})
  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
      .then(res => res.json())
      .then(puppies => setPuppies(puppies))
  }, [])

  const handlePuppyInfo = (puppy) => {
    setIsPuppyInfo(true)
    setPuppyInfo(puppy)
  }
  const displayDogNames = puppies.map(puppy => <PuppyListName key={puppy.id} puppy={puppy} onPuppyInfo={handlePuppyInfo} />)
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">{displayDogNames}</div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {isPuppyInfo && <PuppyInfoCard puppy={puppyInfo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
