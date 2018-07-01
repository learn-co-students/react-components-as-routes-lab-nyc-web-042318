import React from 'react';
import { actors } from '../data';

const Actors = (props) => {
  const list = actors.map(actor => {
    return (
      <div key={actor.name} className="actor">
          <h1>{actor.name}</h1>
          <ul>
            {actor.movies.map(movie => {
              return <li>{movie}</li>
            })}
          </ul>
      </div>
      )
  })

  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {list}
    </div>
  );
};

export default Actors;
