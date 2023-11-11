import React from 'react'

const PuppyInfoCard = ({ puppy, onUpdatedPup }) => {
    const { id, image, name, isGoodDog } = puppy

    const handleGoodDogClick = () => {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ isGoodDog: !isGoodDog })
        })
            .then(res => res.json())
            .then(updatedPup => onUpdatedPup(updatedPup))
    }
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <button onClick={handleGoodDogClick}>{isGoodDog ? 'Good Dog!' : 'Bad Dog!'}</button>
        </div>
    )
}

export default PuppyInfoCard
