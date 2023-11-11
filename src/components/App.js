import React, { useEffect, useState } from "react";
import PuppiesList from "./PuppiesList";
import PuppyListName from "./PuppyListName";
import PuppyInfoCard from "./PuppyInfoCard";

function App() {
  const [puppies, setPuppies] = useState([])
  const [isFilterOn, setIsFilterOn] = useState(false)
  const [pupId, setPupId] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
      .then(res => res.json())
      .then(puppies => setPuppies(puppies))
  }, [])

  const handleSelectedPup = (pupId) => {
    setPupId(pupId)
  }
  const handleUpdatedPup = (updatedPup) => {
    const newUpdatedPups = puppies.map(pup => {
      if (pup.id === updatedPup.id) {
        return updatedPup
      } else {
        return pup
      }
    })
    setPuppies(newUpdatedPups)
  }
  const filteredPups = puppies.filter(pup => {
    if (isFilterOn) return pup.isGoodDog

    return true
  })
  console.log(filteredPups)
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => { setIsFilterOn(!isFilterOn) }}>Filter good dogs: {isFilterOn ? 'ON' : 'OFF'}</button>
      </div>
      <div id="dog-bar">
        <PuppiesList>
          {filteredPups.map(puppy => <PuppyListName key={puppy.id} puppy={puppy} onSelectedPup={handleSelectedPup} />)}
        </PuppiesList>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {filteredPups.map(pup => {
            if (pup.id === pupId) {
              return <PuppyInfoCard key={pupId} puppy={pup} onUpdatedPup={handleUpdatedPup} />
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
