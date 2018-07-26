import React from 'react'
import { movies } from '../data'

const Movies = () => {
  let divMovies = movies.map((movie) =>
    <div>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Genre: {movie.genres.map((genre) => <i>{genre}</i>)}</p>
    </div>
  )
  return (
    <div>
      <h1>Movies Page</h1>
      {divMovies}
    </div>
  )
}

export default Movies
