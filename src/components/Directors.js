import React from 'react';
import { directors } from '../data';

const Directors = () => {
  

  let directDiv = directors.map(director => {
    return (
      <div> <h1>{director.name}</h1>
        {director.movies.map(movie => {
          return (
            <li>{movie}</li>
          )
        })}
      </div>
    )
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directDiv}
    </div>
  );
}

export default Directors
