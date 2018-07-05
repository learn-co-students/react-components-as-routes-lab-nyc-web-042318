import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a=>{
        return (
          <div key={a.name}>
            {a.name}
            {a.movies.map(m=>{
              return (
                <ul key={m}>{m}</ul>
              )
            })}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
