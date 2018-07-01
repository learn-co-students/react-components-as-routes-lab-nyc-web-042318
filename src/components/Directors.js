import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorList = () => {
    return directors.map(function(director) {
      return (
        <div>
          <h1>{director.name}</h1>
          <ul>
            {director.movies.map( movie => {
              return <li>{movie}</li>
            })}
          </ul>
        </div>
      )})
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList()}
    </div>
  );
}

export default Directors
