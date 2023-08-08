import React, {useContext} from 'react';
import DispatchContext from './DispatchContext';
import StateContext from './StateContext';


function Superheroes({ superheroes }) {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  

  const allSuperheroes = state.superheroes.map(({ id, name, occupation, base }) => (
    <li key={id}>
      Name: {name}, Occupation: {occupation}, Base: {base}
    </li>
  ));
  return (
    <div>
      <ul>{allSuperheroes}</ul>
    </div>
  );
}

export default Superheroes;
