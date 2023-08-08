import { useState } from 'react';
import './App.css';

function App() {
  const [superheroes, setSuperheroes] = useState([
    {
      id: 309,
      name: 'Harley Quinn',
      occupation: 'Psychiastrist',
      base: 'Gotham City',
    },
  ]);

  const [heroesCount, setHeroesCount] = useState(1);
  const [lastUpdatedOn, setLastUpdatedOn] = useState(new Date());

  const getLastId = () => superheroes.slice(-1)[0].id;

  const createSuperhero = (superhero) => {
    setSuperheroes((state) => [...state, superhero]);
    setHeroesCount((state) => state + 1);
    setLastUpdatedOn((state) => new Date('2023-09-10'));
  };

  const allSuperheroes = superheroes.map(({ id, name, occupation, base }) => (
    <li key={id}>
      Name: {name}, Occupation: {occupation}, Base: {base}
    </li>
  ));

  const deleteSuperhero = (id) => {
    const updatedList = superheroes.filter((hero) => hero.id !== id);

    setSuperheroes((state) => updatedList);
    setHeroesCount((state) => state - 1);
    setLastUpdatedOn((state) => new Date('2023-10-10'));
  };

  const updateSuperhero = (id, superhero) => {
    const updatedList = superheroes.map((hero) => {
      if (hero.id === id) {
        return superhero;
      }

      return hero;
    });

    setSuperheroes((state) => updatedList);

    setLastUpdatedOn((state) => new Date('2023-11-10'));
  };

  return (
    <div className="App">
      <h1>Superheroes</h1>
      <ul>{allSuperheroes}</ul>

      <div>Count: {heroesCount}</div>
      <div>Last updated on: {lastUpdatedOn.toDateString()}</div>

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
