import { useState, useReducer } from 'react';
import './App.css';

function App() {
  const reducer = (state, action) => {
    // {
    //   type: 'CREATE_SUPERHERO',
    //   superheroe: {
    //     id: 70,
    //     name: 'Batman',
    //     occupation: 'Businessman',
    //     base: 'Gotham City'
    //   }
    // }

    // depending on the action types, we want to do create, delete, or update
    // return the new updated state

    switch (action.type) {
      case 'CREATE_SUPERHEROE':
        return {
          ...state,
          superheroes: [...state.superheroes, action.superhero],
          heroesCount: state.heroesCount + 1,
          lastUpdatedOn: new Date('2023-09-10'),
        };

      case 'DELETE_SUPERHEROE':
        const updatedList = state.superheroes.filter(
          (hero) => hero.id !== action.id
        );

        return {
          ...state,
          superheroes: updatedList,
          heroesCount: state.heroesCount - 1,
          lastUpdatedOn: new Date('2023-10-10'),
        };

      case 'UPDATE_SUPERHEROE':
        const updatedHeroes = state.superheroes.map((hero) => {
          if (hero.id === action.id) {
            return action.superhero;
          }

          return hero;
        });

        return {
          ...state,
          superheroes: updatedHeroes,
          lastUpdatedOn: new Date('2023-11-10'),
        };

      default:
        throw new Error(`The action type ${action.type} doest not exist`);
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    superheroes: [
      {
        id: 309,
        name: 'Harley Quinn',
        occupation: 'Psychiastrist',
        base: 'Gotham City',
      },
    ],
    heroesCount: 1,
    lastUpdatedOn: new Date(),
  });

  const getLastId = () => state.superheroes.slice(-1)[0].id;

  const createSuperhero = (superhero) =>
    dispatch({ type: 'CREATE_SUPERHEROE', superhero });

  const allSuperheroes = state.superheroes.map(
    ({ id, name, occupation, base }) => (
      <li key={id}>
        Name: {name}, Occupation: {occupation}, Base: {base}
      </li>
    )
  );

  const deleteSuperhero = (id) => dispatch({ type: 'DELETE_SUPERHEROE', id });

  const updateSuperhero = (id, superhero) =>
    dispatch({ type: 'UPDATE_SUPERHEROE', id, superhero });

  return (
    <div className="App">
      <h1>Superheroes</h1>
      <ul>{allSuperheroes}</ul>

      <div>Count: {state.heroesCount}</div>
      <div>Last updated on: {state.lastUpdatedOn.toDateString()}</div>

      <input
        type="button"
        value="Create"
        onClick={() =>
          createSuperhero({
            id: 70,
            name: 'Batman',
            occupation: 'Businessman',
            base: 'Gotham City',
          })
        }
      />

      <input
        type="button"
        value="Delete"
        onClick={() => deleteSuperhero(getLastId())}
      />

      <input
        type="button"
        value="Update"
        onClick={() =>
          updateSuperhero(getLastId(), {
            id: 370,
            name: 'Joker',
            occupation: 'Joking around',
            base: 'Arkham Asylum',
          })
        }
      />
    </div>
  );
}

export default App;
