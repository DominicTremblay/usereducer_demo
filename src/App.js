import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
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

  const createSuperhero = (superhero) => {
    setState((state) => ({
      ...state,
      superheroes: [...state.superheroes, superhero],
      heroesCount: state.heroesCount + 1,
      lastUpdatedOn: new Date('2023-09-10'),
    }));
  };

  const allSuperheroes = state.superheroes.map(
    ({ id, name, occupation, base }) => (
      <li key={id}>
        Name: {name}, Occupation: {occupation}, Base: {base}
      </li>
    )
  );

  const deleteSuperhero = (id) => {
    const updatedList = state.superheroes.filter((hero) => hero.id !== id);

    setState((state) => ({
      ...state,
      superheroes: updatedList,
      heroesCount: state.heroesCount - 1,
      lastUpdatedOn: new Date('2023-10-10'),
    }));
  };

  const updateSuperhero = (id, superhero) => {
    const updatedList = state.superheroes.map((hero) => {
      if (hero.id === id) {
        return superhero;
      }

      return hero;
    });

    setState((state) => ({
      ...state,
      superheroes: updatedList,
      lastUpdatedOn: new Date('2023-11-10'),
    }));
  };

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
