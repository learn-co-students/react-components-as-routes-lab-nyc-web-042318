import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let directorDivs = directors.map((dir) => {
    return <div>
      <h1>{dir.name}</h1>
      <ul>
        {dir.movies.map((movie) => {
          return <li>{movie}</li>
        })}
      </ul>
    </div>
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors
