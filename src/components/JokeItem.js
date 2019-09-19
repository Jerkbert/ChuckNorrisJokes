import React from 'react'

const JokeItem = ({joke, deleteJoke, id}) => {
    return(
        <div>
            <h2>{joke}</h2>
            <button onClick={()=> deleteJoke(id)}>Delete Joke</button>
        </div>
    )
}

export default JokeItem