import React from 'react'

const PuppyInfoCard = ({ puppy }) => {
    const { image, name, isGoodDog } = puppy
    console.log(puppy)
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <button>{isGoodDog ? 'Good Dog!' : 'Bad Dog!'}</button>
        </div>
    )
}

export default PuppyInfoCard
