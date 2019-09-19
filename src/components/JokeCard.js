import React from 'react'

export default function Card({ joke, addJoke }) {


    return (
        <div>
            <h2>{joke}</h2>
            <button onClick={addJoke}>Click to save!</button>
          
        </div>
    )
}

