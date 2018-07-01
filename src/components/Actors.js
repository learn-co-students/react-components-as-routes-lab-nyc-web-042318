import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)

  let actorDivs = actors.map((actor) => {
    return <div>
      <h1>{actor.name}</h1>
      <ul>
        {actor.movies.map((movie) => {
          return <li>{movie}</li>
        })}
      </ul>
    </div>
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  );
};

export default Actors;
