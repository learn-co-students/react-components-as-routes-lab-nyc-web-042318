import React from 'react'
import { actors } from '../data'

const Actors = () => {
  let divActors = actors.map(function (actor) {
    return <div className='actor'>
      <h1>{actor.name}</h1>
      <h3> Movies </h3>
      {actor.movies.map((movie) =>
        <li key={movie}>{movie}</li>)}

    </div>
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {divActors}
    </div>
  )
}

export default Actors
