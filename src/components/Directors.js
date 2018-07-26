import React from 'react'
import { directors } from '../data'

const Directors = () => {
  const divDirectors = directors.map((director) =>
    <div>
      <h2>{director.name}</h2>
      <b> Movies </b>
      {director.movies.map((movie) =>
        <li key={movie}>{movie}</li>
      )}
    </div>)

  return (
    <div>
      <h1>Directors Page</h1>
      {divDirectors}

    </div>
  )
}

export default Directors
