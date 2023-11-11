import React from 'react'

const PuppyListName = ({ puppy, onPuppyInfo }) => {

    return (
        <span onClick={() => onPuppyInfo(puppy)}>{puppy.name}</span>
    )
}

export default PuppyListName
