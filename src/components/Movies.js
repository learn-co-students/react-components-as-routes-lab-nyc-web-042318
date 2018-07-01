import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  let detail = movies.map(movie => { return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <h3>{movie.time}</h3>
        <h4>{movie.genres.map(genre => {
            return (
              <li>{genre}</li>
            )
          })}</h4>
        <h5>{movie.metascore}</h5>
      </div>
      )})
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
          {detail}
    </div>
  );
};

export default Movies;
