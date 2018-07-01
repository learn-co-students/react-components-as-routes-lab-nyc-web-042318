import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieList = () => {
    return movies.map(function(movie) {
      return(
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.time}</h3>
          <h3>Genres:</h3>
          <ul>
            {movie.genres.map(function(genre) {
              return(
                <li>{genre}</li>
              )
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList()}
    </div>
  );
};

export default Movies;
