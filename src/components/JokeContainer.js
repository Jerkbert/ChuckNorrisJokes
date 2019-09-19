import React from 'react'
import JokeItem from './JokeItem'

export default function JokeContainer({ savedJokes, deleteJoke}) {
    const displayJokes = savedJokes.map( joke => {
        return <JokeItem
        key={joke.id}
        jokeContents={joke.text}
        />

    })
    return (
        <div>
            {displayJokes}
        </div>
    )
}
