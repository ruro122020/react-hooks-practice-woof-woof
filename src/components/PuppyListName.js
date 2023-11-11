import React from 'react'

const PuppyListName = ({ puppy, onSelectedPup }) => {

    return (
        <span onClick={() => { onSelectedPup(puppy.id) }}>{puppy.name}</span>
    )
}

export default PuppyListName
