import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  let movieDivs = movies.map((movie) => {
    return (
      <div>
        <h1>{movie.title}</h1>
        <h3>{movie.time}</h3>
        <ul>
          {movie.genres.map((genre) => {
            return <li>{genre}</li>
          })}
        </ul>
      </div>
      )
  })

  return (
    <div>
      <h1>Movies Page</h1>
        {movieDivs}
    </div>
  );
};

export default Movies;
